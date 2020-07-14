const { Router } = require('express');
const router = Router();

//Controladores
const ctrlUser = require('../controllers/users');

router.route('/')
    .get(ctrlUser.getUsers)
    .post(ctrlUser.createUser);

router.route('/:id')
    .delete(ctrlUser.deleteUser);      

module.exports = router;