import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config(); // Membaca variabel environment dari file .env
export default mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
