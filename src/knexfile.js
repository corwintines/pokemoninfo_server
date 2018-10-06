// Config settings for Database

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemondataDB'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-pokemondataDB'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
