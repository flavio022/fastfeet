import Router from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import FileController from "./app/controllers/FileController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import DeliverymanController from "./app/controllers/DeliverymanController";
import DeliverymanFile from "./app/controllers/DeliverymanFIle";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();
const upload = multer(multerConfig);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);
routes.post("/recipient", RecipientController.store);
routes.post("/deliveryman", DeliverymanController.store);
routes.get("/deliveryman", DeliverymanController.index);
routes.post("/files", upload.single("file"), FileController.store);
routes.post("/deliverymanFile", upload.single("file"), DeliverymanFile.store);

export default routes;
