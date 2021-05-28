import { Router } from "express";
import { getUserLogged } from "../controller/GetUsers";
import { CreateUserController } from "../controller/CreateUser";

const router = Router();

router.get("/", getUserLogged);
router.post("/", CreateUserController);
router.put("/users", getUserLogged);
router.delete("/users", getUserLogged);

export default router;
