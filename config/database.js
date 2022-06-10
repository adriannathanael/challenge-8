const secretdata = {
    JWT_SIGNATURE_KEY: 'Rahasia',
    DB_USER: 'qlozkgwvrrfqsb',
    DB_PASSWORD: '5b287fd6b1483bd8e200cae79954dc669336b916fec2cd967d2aa497658ff9cc',
    DB_NAME: 'df4em091pm0t66',
    DB_HOST: 'ec2-52-44-13-158.compute-1.amazonaws.com',
    DB_PORT: '5432'
}

const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = secretdata;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    },
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    },
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    },
  }
}
