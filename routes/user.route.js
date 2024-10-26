// const express = require("express");
// const userController = require("../controller/user.controller.js")

// const router = express.Router();

// //router for login
// router.get("/login", userController.login);

// //router for register
// router.get("/register", userController.register);

// router.post("/register-new-user", (req, res)=> {
//     res.send("good")
// })

// module.exports = router; 


// user.route.js
const express = require("express");
const userController = require("../controller/user.controller.js");

const router = express.Router();

// Router for login
router.get("/login", userController.login);

// Router for register
router.get("/register", userController.register);

// Router for register
router.get("/adminDashboard", userController.adminDashboard);

// Router to save a new user
router.post("/register-new-user", userController.saveUser);

module.exports = router;
