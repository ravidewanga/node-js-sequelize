module.exports = {
  HOST: "localhost",
  PORT: 3308,
  USER: "root",
  PASSWORD: "",
  DB: "smis",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
