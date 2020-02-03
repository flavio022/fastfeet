import Deliveryman from "../models/Deliveryman";
import DeliveryManFile from "../models/DeliverymanFile";

class DeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findAll({
      attributes: ["id", "name", "email"],
      include: [
        {
          model: DeliveryManFile,
          as: "avatar",
          attributes: ["name", "path", "url"]
        }
      ]
    });
    return res.json(deliveryman);
  }

  async store(req, res) {
    const { name, email } = req.body;
    const deliveryExist = await Deliveryman.findOne({ where: { email } });
    if (deliveryExist) {
      return res.status(401).json({ error: "Delivery already exist" });
    }
    const deliveryman = await Deliveryman.create(req.body);
    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
