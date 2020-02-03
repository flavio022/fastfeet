import Recipient from "../models/Recipient";

class RecipientController {
  async store(req, res) {
    const {
      cpf,
      name,
      street,
      address_number,
      number_complement,
      state,
      city,
      zip_code
    } = req.body;

    const UserExist = await Recipient.findOne({ where: { cpf } });
    if (UserExist) {
      return res.status(401).json({ error: "User already exist" });
    }

    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }
}

export default new RecipientController();
