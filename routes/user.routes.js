// 2nd page --- after go to controllers folder  (../controllers/user.controller)
const express = require("express");

const router = express.Router(); //this for defing this router.post('/create', UserController.createUser)  

const UserController = require('../controllers/user.controller'); 

//localhost:8080/v1/user/getAll
router.post('/create', UserController.createUser); //we can add more routes below (ex. user's provided services)
router.get('/getAll', UserController.getAllUser); 
router.get('/get/:id', UserController.getUserByID); // ---- id   path param
router.post('/updateBy/:id', UserController.updateUserByID); // ---- id   path param
router.post('/deleteBy/:id', UserController.deleteUserByID); 
router.get('/isExist', UserController.isUserExist);  //  ouery param

module.exports = router;