import { functions } from "./config";
import cors from "cors";
// import axios from "axios";
import express from "express";
import graphQlServer from "./setup";
import "reflect-metadata";

const app = express();
const server = graphQlServer(app);

//Cors
app.use(cors());

exports.graphql = functions.https.onRequest(server);
