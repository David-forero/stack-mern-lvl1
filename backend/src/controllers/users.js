const ctrl = {}

const User = require('../models/users');

ctrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

ctrl.createUser = async (req, res) => {
    const data = req.body;
    const newUser = new User(data);
    await newUser.save();
    res.json('Created User');
};

ctrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('Deleted note')
};

module.exports = ctrl