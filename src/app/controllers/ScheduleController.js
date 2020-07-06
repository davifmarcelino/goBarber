import { Op } from 'sequelize';
import { parseISO, startOfDay, endOfDay } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const provider = await User.findOne({
      where: { provider: true, id: req.userId },
    });

    if (!provider) {
      return res.status(401).json({ error: 'User is not a provider' });
    }
    const { date } = req.query;
    const parsedDate = parseISO(date);

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: { [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)] },
      },
      order: ['data'],
    });

    return res.json(appointment);
  }
}

export default new ScheduleController();
