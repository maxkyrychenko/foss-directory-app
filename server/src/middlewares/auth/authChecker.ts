import {NextFunction, Request, Response} from "express";
import {ApiError} from "../../lib";
import {TokenService} from "../../services";

const authChecker = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader) {
			throw new Error();
		}

		const accessToken = authHeader.split(" ")[1];
		if (!accessToken) {
			throw new Error();
		}

		const userPayload = TokenService.verifyAccess(accessToken);
		if (!userPayload) {
			throw new Error();
		}

		res.locals.user = userPayload;
		next();
	} catch (e) {
		next(new ApiError(401, "Unauthorized."));
	}
};

export default authChecker;
