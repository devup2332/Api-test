import { Router } from "express";
import PacientesRouter from "./Pacientes.routes";
import UserRouter from "./User.routes";

const router = Router();

router.use("/pacientes", PacientesRouter);
router.use("/users", UserRouter);

export default router;
