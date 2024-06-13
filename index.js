import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
// connectDB();

import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/books", bookRoutes);

app.listen(5000, connectDB(), async () => {
    console.log("Server started on port 5000");
});