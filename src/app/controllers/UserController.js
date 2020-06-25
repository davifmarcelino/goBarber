import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

<<<<<<< HEAD
        return res.json({id,name,email,provider})
    }

    async update(req,res){
        
    }
=======
    return res.json({ id, name, email, provider });
  }
>>>>>>> bcadb961c60505bae4d868de1506faf378fa7cc5
}

export default new UserController();
