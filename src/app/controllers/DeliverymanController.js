import Deliveryman from "../models/Deliveryman";

class DeliverymanController {
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
