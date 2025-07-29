import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Artisan = sequelize.define("Artisan", {
  nom: { type: DataTypes.STRING, allowNull: false },
  specialiteId: { type: DataTypes.INTEGER, allowNull: true },
  note: { type: DataTypes.FLOAT, defaultValue: 0 },
  ville: { type: DataTypes.STRING, allowNull: false },
  a_propos: { type: DataTypes.TEXT },
  email: { type: DataTypes.STRING, allowNull: false },
  site_web: { type: DataTypes.STRING },
  categorie: { type: DataTypes.STRING },
  top: { type: DataTypes.BOOLEAN, defaultValue: false },
  photo: { type: DataTypes.STRING },
}, {
  tableName: "artisans",
  timestamps: false,
});
