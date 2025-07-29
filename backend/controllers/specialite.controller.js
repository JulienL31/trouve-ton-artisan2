import { Specialite } from '../models/index.js';



export const getAllSpecialites = async (req, res) => {
  try {
    const specialites = await Specialite.findAll();
    res.json(specialites);
  } catch (error) {
    console.error("Erreur getAllSpecialites:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
