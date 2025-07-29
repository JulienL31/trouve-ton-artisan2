import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Categorie = sequelize.define("Categorie", {
  nom: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: "categories",
  timestamps: false
});
