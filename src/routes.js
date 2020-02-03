import Router from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import FileController from "./app/controllers/FileController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import DeliverymanController from "./app/controllers/DeliverymanController";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();
const upload = multer(multerConfig);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);
routes.post("/recipient", RecipientController.store);
routes.post("/deliveryman", DeliverymanController.store);
routes.post("/files", upload.single("file"), FileController.store);
export default routes;
