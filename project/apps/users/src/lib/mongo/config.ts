import {registerAs} from "@nestjs/config";

const DEFAULT_MONGO_PORT = 27017;

const configFactory = () => ({
  host: process.env.MONGO_HOST,
  name: process.env.MONGO_DB,
  port: parseInt(process.env.MONGO_PORT ?? `${DEFAULT_MONGO_PORT}`, 10),
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  authBase: process.env.MONGO_AUTH_BASE,
})

export const mongoConfig = registerAs('db', configFactory)
