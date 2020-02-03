import DeliverymanFile from "../models/DeliverymanFile";

class DeliverymanFileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await DeliverymanFile.create({ name, path });
    return res.json(file);
  }
}

export default new DeliverymanFileController();
