import { Request, Response } from "express";

export default class Users {
  public static async getUsers(req: Request, res: Response): Promise<void> {
    res.status(500);
    throw new Error("Test erro handler");
  }
}
