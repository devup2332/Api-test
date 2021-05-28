import express from "express";
import cors from "cors";
import ApiRouter from "./routers/Api.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ApiRouter);

app.listen(8000, () => {
  console.log("Api is working");
});

export default app;
