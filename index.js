import express from "express";
import cors from "cors";
import {
  getAllPlants,
  addPlants,
  deletePlant,
  updatePlant,
} from "./src/plants.js";

const PORT = 3004;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/plants", getAllPlants);
app.post("/plants", addPlants);
app.delete("/plants/:docId", deletePlant);
app.patch("/plants/:docId", updatePlant);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}...`);
});
