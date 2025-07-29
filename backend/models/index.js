import { sequelize } from '../config/database.js';
import { Artisan } from './artisan.model.js';
import { Specialite } from './specialite.model.js';
import { Categorie } from './categorie.model.js';

// Associations
Specialite.hasMany(Artisan, {
  foreignKey: 'specialiteId',
  as: 'artisans'
});
Artisan.belongsTo(Specialite, {
  foreignKey: 'specialiteId',
  as: 'specialite'
});

Categorie.hasMany(Specialite, {
  foreignKey: 'categorieId',
  as: 'specialites'
});
Specialite.belongsTo(Categorie, {
  foreignKey: 'categorieId',
  as: 'categorie'
});

export {
  sequelize,
  Artisan,
  Specialite,
  Categorie
};
