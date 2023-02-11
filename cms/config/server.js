module.exports = ({ env }) => {
  const isProduction = env("NODE_ENV", "DEVELOPMENT") === "production";
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    url: isProduction && "https://content.ericjiang.dev",
  };
};
