const express = require('express');
const router = express.Router();




//controllers
const usersController = require('../controllers/usersController');

//api controller
const apiUserController = require('../api/usersApiController');

//middleWares
const validateRegister = require('../middlewares/validateRegisterMiddleware')
const validateLogin = require("../middlewares/validateLoginMiddleware")

const uploadFile = require('../middlewares/usersMulter');

const ghestMiddleware = require("../middlewares/ghestMiddleware")

const authMiddleware = require("../middlewares/authMiddleware");

const usersApiController = require('../api/usersApiController');

const validateUserEdit = require("../middlewares/validateUserEditMiddleware")






    // todos los usuarios
    / router.get('/users', usersController.allUsers);

    
// perfil de usuarios
router.get('/user-profile/:id', usersController.userDetails);



// login usuarios
router.get('/user-login', usersController.login);

router.post('/user-login', validateLogin, usersController.loginProcess);
router.post("/user-logout", usersController.logout)



//registro de usuarios
router.get('/user-register', usersController.register);
router.post('/user-register', uploadFile.single('profilePhoto'), validateRegister, usersController.registerProcess);



////edicion de usuarios
router.get('/user-edit/:id', usersController.userEdit);

router.put('/user-edit/:id', uploadFile.single('profilePhoto'), usersController.userUpdate)

router.delete('/user-edit/:id', usersController.userDelete);

router.get("/ghestUser", usersController.ghest)
router.get("/authUser", usersController.auth)




//Rutas API
router.get('/api/users', usersApiController.all);
router.get('/api/users/:id', usersApiController.showUser);

module.exports = router;