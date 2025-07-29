import { Categorie } from '../models/index.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      attributes: ['id', 'nom'],
    });
    res.json(categories);
  } catch (err) {
    console.error("Erreur getAllCategories :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
