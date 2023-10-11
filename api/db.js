import mysql from "mysql"

export const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "Parvi@123",
 database: "teste"
});