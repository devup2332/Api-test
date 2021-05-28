import { Request, Response } from "express";
import UserModel from "../models/User.model";

export const getUserLogged = async (req: Request, res: Response) => {
  const users = await UserModel.find();
  return res.json(users);
};
