import { Request, Response } from "express";
import UserServices from "../services/userServices";

export default class Users {
  public static async getUsers(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: "Users are ...." });
  }

  public static async registerUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    const { name, email, image } = userData;
    if (!name || !email || !image) {
      res.status(422);
      throw new Error("Invalid input data, All value required.");
    }
    const existingUser = await UserServices.getUserByQuery({ email });
    if (existingUser) {
      res.status(409);
      throw new Error("User already exist.");
    }
    const userResponse = await UserServices.registerUser(userData);
    res.status(201).send(userResponse);
  }
}
