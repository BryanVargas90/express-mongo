import { db } from "./connectDb.js";
import { ObjectId } from "mongodb";

const coll = db.collection("plants");

//CRUD: GET
export async function getAllPlants(req, res) {
  const plants = await coll.find({}).toArray();
  res.send(plants);
}

//CRUD: POST
export async function addPlants(req, res) {
  const newPlant = req.body;
  await coll.insertOne(newPlant);
  res.status(201).send({ message: "new plant added" });
}

//CRUD:Delete
export async function deletePlant(req, res) {
  const docId = { _id: new ObjectId(req.params.docId) };

  await coll.deleteOne(docId);
  res.status(201).send({ message: "plant has been deleted" });
}
//CRUD: Update/patch
export async function updatePlant(req, res) {
  const docId = { _id: new ObjectId(req.params.docId) };
  const updatePlant = req.body;

  await coll.updateOne({ _id: docId }, { $set: { updatePlant } });
  res.status(201).send({ message: "plant has been updated" });
}
