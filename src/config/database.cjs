module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'admin',
  password: '123456',
  database: 'viaje-ja-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};