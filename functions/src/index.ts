import { functions } from "./config";
import cors from "cors";
import express from "express";
import graphQlServer from "./setup";

const app = express();
const server = graphQlServer(app);

//Cors
app.use(cors());

exports.graphql = functions.region("europe-west1").https.onRequest(server);
