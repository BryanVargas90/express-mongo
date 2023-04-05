import { MongoClient } from "mongodb";
import { mongoUri } from "../secrets.js";

const client = new MongoClient(mongoUri);

export const db = client.db("my-plant");

export async function addPlant(req, res) {
  const newPlant = req.body;
  await db.collection("plants").insertOne(newPlant);
  res.status(201).send({ mesaage: "new plant added" });
}
