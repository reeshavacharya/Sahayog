import { Router } from "express";
import Users from "../controllers/userController";
import { asyncHandlerWrapper } from "../utils/expressAsyncHandlerWrapper";
import protectedRouteHandler from "../middleware/authHandlerMiddleware";

const router = Router();

router.get("/",protectedRouteHandler, asyncHandlerWrapper(Users.getUsers));
router.post("/register", asyncHandlerWrapper(Users.registerUser));

export default router;
