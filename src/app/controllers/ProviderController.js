import File from '../models/File';
import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        { model: File, attributes: ['name', 'path', 'url'], as: 'avatar' },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
