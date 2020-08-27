import "dotenv/config";
import express from "express";
import config from "./config";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "bodyParser";

async function startServer() {
	const app = express();
	app.use(cors());
	app.use(bodyParser.json());
	app.use(helmet());

	app.listen(config.port || 3000, () => {
		console.log(`Server listening on port ${ config.port }`);
	});
}
  
await startServer();
