import express from "express";
import { InvoiceController } from "../invoice/controllers/invoice.controller.js";

const routes = express.Router();
const controller = new InvoiceController();

routes.get("/", controller.findAll.bind(controller));
routes.post("/:id/payments", controller.createPayment.bind(controller));

export default routes;
