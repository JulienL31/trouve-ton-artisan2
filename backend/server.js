import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';

import artisansRouter from './routes/artisans.js';
import categoriesRouter from './routes/categories.js';
import specialitesRouter from './routes/specialite.routes.js';
import contactRouter from './routes/contact.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:5173';

const app = express();

// ✅ Middlewares globaux d'abord
app.use(helmet());
app.use(cors({ origin: FRONT_URL }));
app.use(express.json());

// ✅ Routes
app.use('/api/artisans', artisansRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/specialites', specialitesRouter);
app.use('/api/contact', contactRouter);

// ✅ Health check
app.get('/api/health', (_, res) => res.json({ status: 'OK' }));

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Erreur serveur' });
});

// ✅ Sync DB & start
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la BDD réussie');
    await sequelize.sync({ alter: true });
    console.log('✅ Modèles synchronisés');
    app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
  } catch (err) {
    console.error('❌ Échec de démarrage du serveur :', err);
    process.exit(1);
  }
})();
