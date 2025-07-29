import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'trouve_ton_artisan',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Admin',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

export { sequelize };
