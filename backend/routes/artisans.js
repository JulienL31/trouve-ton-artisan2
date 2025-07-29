import express from 'express';
import {
  getAllArtisans,
  getArtisanById,
  createArtisan,
  updateArtisan,
  deleteArtisan
} from '../controllers/artisan.controller.js';
import { Artisan } from '../models/artisan.model.js';

const router = express.Router();

// ✅ Route artisans du mois sans champ `top`
router.get('/mois', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      limit: 3,
      order: [['note', 'DESC']]
    });
    res.json(artisans);
  } catch (error) {
    console.error('Erreur route /mois :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/', getAllArtisans);
router.get('/:id', getArtisanById);
router.post('/', createArtisan);
router.put('/:id', updateArtisan);
router.delete('/:id', deleteArtisan);

export default router;
