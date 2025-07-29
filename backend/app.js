const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const artisanRoutes = require('./routes/artisan.routes');
const specialiteRoutes = require('./routes/specialite.routes');
const categorieRoutes = require('./routes/categorie.routes');

app.use(cors());
app.use(express.json());

app.use('/api/artisans', artisanRoutes);
app.use('/api/specialites', specialiteRoutes);
app.use('/api/categories', categorieRoutes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced database.");
});

module.exports = app;
