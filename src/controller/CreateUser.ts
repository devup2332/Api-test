import { Request, Response } from "express";
import UserModel from "../models/User.model";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await UserModel.create(data);
    return res.send("User created succesfully");
  } catch (err) {
    return res.status(400).send("Envia completa la data gil");
  }
};
