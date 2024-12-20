// config.js
import dotenv from "dotenv";
dotenv.config();

export const config = {
    environment: process.env.NODE_ENV || 'development',

    server: {
        port: process.env.PORT || 3000,
    },

    database: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },

    auth: {
        jwtSecret: process.env.JWT_SECRET || '', 
        tokenExpiration: process.env.TOKEN_EXPIRATION || '1h',
    },
};


if (config.environment === 'production' && !process.env.JWT_SECRET) {
    console.warn("Warning: No JWT_SECRET specified for production");
}
