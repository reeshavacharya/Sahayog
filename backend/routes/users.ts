import { Router } from "express";
import Users from "../controllers/userController";
import { asyncHandlerWrapper } from "../utils/expressAsyncHandlerWrapper";

const router = Router();

router.get("/", asyncHandlerWrapper(Users.getUsers));

export default router;
