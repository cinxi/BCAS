// const model = require("../models")

// const login = (req, res) => {
//     res.render("login");
// }

// const register = (req, res) => {
//     res.render("register", { message: "dsaf"});
// }

// const saveUser = (req, res)=> {

//     const repeat_data = req.body.repeat_data

//     const dataUserToInsertDatabase = {
//         firstName_data : req.body.firstName_data,
//         lastName_data : req.body.lastName_data,
//         userRole_data : req.body.userRole_data,
//         contactNumber_data : req.body.contactNumber_data,
//         password_data : req.body.password_data,
//     }
//     model.user.create(dataUserToInsertDatabase).then(result => {
//         res.status(200)
//         res.render("register", {message: "Data have been saved!"})
//     }).catch(error => {
//         res.status(500)
//         res.sender("register", { message: "Something went wrong! do it again!"})
//     })
    
// }

// module.exports = { login, register, saveUser}



const model = require("../models");

const login = (req, res) => {
    res.render("login");
}
const adminDashboard = (req, res) => {
    res.render("adminDashboard");
}


const register = (req, res) => {
    res.render("register", { message: "" });
}

const saveUser = (req, res) => {
    const dataUserToInsertDatabase = {
        fullname: `${req.body.firstName_data} ${req.body.lastName_data}`, // Combine first and last names
        Role: req.body.userRole_data,
        username: req.body.username, // Ensure username is captured
        password: req.body.password_data,
        ContactNumber: req.body.contactNumber_data
    };

    model.user.create(dataUserToInsertDatabase)
        .then(result => {
            res.status(200);
            res.render("register", { message: "Data has been saved!" });
        })
        .catch(error => {
            console.error(error); // Log error to console for debugging
            res.status(500);
            res.render("register", { message: "Something went wrong! Please try again." });
        });
}

module.exports = { login, register,  adminDashboard, saveUser };
