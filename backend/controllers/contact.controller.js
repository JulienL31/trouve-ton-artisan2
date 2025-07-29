export const postContactMessage = async (req, res) => {
  const { nom, email, message } = req.body;
  if (!nom || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  try {
    // Ici on simule le stockage ou l'envoi du message
    console.log("Nouveau message contact :", { nom, email, message });
    res.status(200).json({ message: "Message reçu, merci !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
