import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config()

class Database {
    private DB_URL = process.env.MONGODB_URL;

    createConnection() {
        mongoose.connect(this.DB_URL as string);
    }
}

export default Database;