import {Router} from "express";
import {AuthController} from "../../controllers";
import {refreshTokenCookieChecker} from "../../middlewares";

const authRouter = Router();

authRouter.post("/signup", AuthController.signup);
authRouter.post("/login", AuthController.login);
authRouter.post("/refresh", refreshTokenCookieChecker, AuthController.refresh);
authRouter.post("/logout", refreshTokenCookieChecker, AuthController.logout);

export default authRouter;
