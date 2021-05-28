import { Router } from "express";
import { getUserLogged } from "../controller/GetUsers";

const router = Router();

router.get("/pacientes", getUserLogged);
router.post("/pacientes");

export default router;
