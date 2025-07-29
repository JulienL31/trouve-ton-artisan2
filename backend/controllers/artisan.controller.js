import { Artisan, Specialite } from '../models/index.js';

// ✅ Récupérer tous les artisans AVEC leur spécialité
export const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'],
        },
      ],
    });
    res.json(artisans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ✅ Récupérer un artisan par ID AVEC sa spécialité
export const getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'],
        },
      ],
    });

    if (!artisan) return res.status(404).json({ error: 'Introuvable' });

    res.json(artisan);
  } catch (err) {
    console.error("❌ ERREUR getArtisanById:", err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ✅ Créer un artisan
export const createArtisan = async (req, res) => {
  try {
    const newArtisan = await Artisan.create(req.body);
    res.status(201).json(newArtisan);
  } catch (err) {
    console.error("❌ ERREUR createArtisan:", err);
    res.status(400).json({ error: 'Création échouée' });
  }
};

// ✅ Mettre à jour un artisan
export const updateArtisan = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) return res.status(404).json({ error: 'Introuvable' });

    await artisan.update(req.body);
    res.json(artisan);
  } catch (err) {
    console.error("❌ ERREUR updateArtisan:", err);
    res.status(400).json({ error: 'Mise à jour échouée' });
  }
};

// ✅ Supprimer un artisan
export const deleteArtisan = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) return res.status(404).json({ error: 'Introuvable' });

    await artisan.destroy();
    res.json({ message: 'Supprimé avec succès' });
  } catch (err) {
    console.error("❌ ERREUR deleteArtisan:", err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
