import Order from "../models/Orders";
import { parseISO, format, addHours } from "date-fns";

import Recipient from "../models/Recipient";
import DeliveryMan from "../models/Deliveryman";
class OrderController {
  async store(req, res) {
    const { recipient_id, deliveryman_id, signature_id, product } = req.body;
    const recipientExist = await Recipient.findByPk(recipient_id);
    if (!recipientExist) {
      return res.status(401).json({ error: "Recipient Not Found" });
    }
    const deliverymanExist = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliverymanExist) {
      return res.status(401).json({ error: "Deliveryman Not Found" });
    }
    const date = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");
    const parsedDate = parseISO(date);
    console.log("Hora atual:");
    const start_date = addHours(parsedDate, 3);
    const order = await Order.create({ ...req.body, start_date });
    return res.status(200).json(order);
  }
  async index(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}

export default new OrderController();
