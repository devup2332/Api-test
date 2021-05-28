import { Router } from "express";
import { getUserLogged } from "../controller/GetUsers";
import { Request, Response } from "express";

const router = Router();

router.get("/users", getUserLogged);
router.post("/dd", (req: Request, res: Response) => {
  console.log(req.body);
  return res.send("Usuario Creado");
});
router.put("/users", getUserLogged);
router.delete("/users", getUserLogged);

export default router;
