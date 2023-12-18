import express from 'express';
import userRoutes from './routes/user-routes';
import productRoutes from './routes/product-routes';

import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', productRoutes);


export default app;
