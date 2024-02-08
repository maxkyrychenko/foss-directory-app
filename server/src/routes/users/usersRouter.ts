import {UsersController} from "#src/controllers";
import {authChecker} from "#src/middlewares";
import {Router} from "express";

const usersRouter = Router();

usersRouter.delete("/account", authChecker, UsersController.delete);

export default usersRouter;
