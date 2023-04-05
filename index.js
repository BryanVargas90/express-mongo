import express from "express";
import cors from "cors";
import { getAllPlants, addPlants } from "./src/plants.js";

const PORT = 3004;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/plants", getAllPlants);
app.post("/plants", addPlants);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}...`);
});
