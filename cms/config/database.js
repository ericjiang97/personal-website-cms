const path = require("path");

module.exports = ({ env }) => ({
  connection:
    env.NODE_ENV === "PRODUCTION"
      ? {
          client: "postgres",
          connection: {
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi"),
            user: env("DATABASE_USERNAME", ""),
            password: env("DATABASE_PASSWORD", ""),
            ssl: {
              rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
            },
          },
          debug: false,
        }
      : {
          client: "sqlite",
          connection: {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          useNullAsDefault: true,
          debug: false,
        },
});
