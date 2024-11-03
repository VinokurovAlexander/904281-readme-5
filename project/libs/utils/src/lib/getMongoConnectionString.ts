interface Params {
  username: string,
  password: string,
  host: string,
  port: number,
  databaseName: string,
  authDatabase: string
}

export const getMongoConnectionString = ({username , password, host, port, databaseName, authDatabase}: Params): string =>
  `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`


