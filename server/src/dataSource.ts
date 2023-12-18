import { DataSource } from "typeorm";
import ormConfig from "../config/ormconfig";

export const connectDB = new DataSource(ormConfig);

connectDB.initialize()
    .then(() => console.log(`Data Source has been initialized`))
    .catch((err) => console.error(`Data Source initialization error`, err));
