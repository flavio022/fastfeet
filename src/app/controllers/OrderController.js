import Order from "../models/Orders";
import Deliveryman from "../models/Deliveryman";
import Recipient from "../models/Recipient";
import File from "../models/File";
import pt from "date-fns/locale/pt";
import NotificationSchema from "../schemas/Notification";
import { parseISO, format, addHours } from "date-fns";

class OrderController {
  async store(req, res) {
    const { recipient_id, deliveryman_id, signature_id, product } = req.body;
    const recipientExist = await Recipient.findByPk(recipient_id);
    if (!recipientExist) {
      return res.status(401).json({ error: "Recipient Not Found" });
    }
    console.log("foi");
    const deliverymanExist = await Deliveryman.findByPk(deliveryman_id);

    if (!deliverymanExist) {
      return res.status(401).json({ error: "Deliveryman Not Found" });
    }
    const date = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");
    const parsedDate = parseISO(date);
    console.log("Hora atual:");
    const start_date = addHours(parsedDate, 3);
    const order = await Order.create({ ...req.body, start_date });
    /*Notify deliveryman*/
    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    const formatedDate = format(start_date, "'dia' dd 'de' MMMM', às'H:mm'h'", {
      locale: pt
    });
    console.log("eae");
    await NotificationSchema.create({
      content: `Novo agendamento para ${deliveryman.name} para dia ${formatedDate}`,
      delivery: deliveryman_id
    });

    return res.status(200).json(order);
  }
  async index(req, res) {
    const order = await Order.findAll({
      include: [
        {
          model: File,
          as: "signature",
          attributes: ["id", "path"]
        },
        {
          model: Recipient,
          as: "recipient",
          attributes: [
            "id",
            "cpf",
            "name",
            "street",
            "address_number",
            "number_complement",
            "state",
            "city",
            "zip_code"
          ]
        },
        {
          model: Deliveryman,
          as: "deliveryman",
          attributes: ["id", "name", "email"]
        }
      ],
      attributes: [
        "id",
        "product",
        "canceledAt",
        "start_date",
        "canceledAt",
        "recipient_id",
        "deliveryman_id"
      ]
    });

    return res.json(order);
  }
  async update(req, res) {
    const { id } = req.params;

    const orderExists = await Order.findByPk(id);

    if (!orderExists) {
      return res.status(401).json({ erorr: "Order not exists" });
    }
    const newOrder = await Order.update(req.body);
    return res.json(newOrder);
  }
  async delete(req, res) {
    const { id } = req.params;

    const orderExists = await Order.findByPk(id);
    if (!orderExists) {
      return req.status(201).json({ error: "Order not found!" });
    }
    await Order.destroy({ where: { id } });
    return res.send({ ok: "Order has been deleted" });
  }
}

export default new OrderController();
