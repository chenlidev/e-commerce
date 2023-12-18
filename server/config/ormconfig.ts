import {DataSourceOptions} from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const ormConfig: DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: false,
    synchronize: true,
    entities: [
        "src/entities/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
}

export default ormConfig;