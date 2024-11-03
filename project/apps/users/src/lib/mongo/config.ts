import {ConfigType, registerAs} from "@nestjs/config";
import {IsString, IsOptional, IsNumber, Min, Max, validateOrReject} from "class-validator";
import {plainToClass} from "class-transformer";

const DEFAULT_MONGO_PORT = 27017;
const MIN_PORT = 0;
const MAX_PORT = 65535;

class MongoConfig {
  @IsString({ message: 'MongoDB host is required'})
  public host: string

  @IsString({ message: 'Database name is required'})
  public name: string

  @IsNumber({}, { message: 'Not valid port number'})
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  @IsOptional()
  public port: number = DEFAULT_MONGO_PORT

  @IsString({ message: 'MongoDB user is required'})
  public user: string

  @IsString({ message: 'MongoDB password is required'})
  public password: string

  @IsString({ message: 'MongoDB authentication base is required'})
  public authBase: string

  public async validate() {
    try {
      await validateOrReject(this)
    } catch (err) {
      console.log('Validate mongo config error', err)
      throw err
    }

  }
}

const getMongoConfig = async () => {
  const config = plainToClass(MongoConfig, {
    host: process.env.MONGO_HOST,
    name: process.env.MONGO_DB,
    port: parseInt(process.env.MONGO_PORT, 10),
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE,
  })

  await config.validate()

  return config
}

export const mongoConfig = registerAs('db', (): Promise<ConfigType<typeof getMongoConfig>> => getMongoConfig())
