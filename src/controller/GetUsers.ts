import { Request, Response } from "express";

export const getUserLogged = (req: Request, res: Response) => {
  console.log(req.body);
  const response = {
    message: "User dsadasdsad",
  };
  return res.json(response);
};
