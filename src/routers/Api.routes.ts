import { Router } from "express";
import UserRouter from "./User.routes";

const router = Router();

router.use("/users", UserRouter);

export default router;
