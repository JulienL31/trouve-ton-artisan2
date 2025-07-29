import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Specialite = sequelize.define("Specialite", {
  nom: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: "specialites",
  timestamps: false
});
