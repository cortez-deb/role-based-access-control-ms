
import { Sequelize } from "sequelize";
const __dirname = process.cwd();

const sequelize = new Sequelize({
    database: 'kuza',
  username: 'postgres',
  password: '1234',
  host: '127.0.0.1',
  port: '5432',

   // database: process.env.DB_NAME,
    dialect: 'postgres',
   // username: process.env.DB_USERNAME,
   // password: process.env.DB_PASSWORD,
   // host: process.env.DB_HOST,
  //  port: Number(process.env.DB_PORT),
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
    models: [__dirname + "../models"],
    logging: (sql, options) => {
        // Log errors only
        if (options?.type === 'ERROR') {
            console.error(`[Sequelize] Error: ${options?.message}`);
        }
    }
});

export default sequelize;