
const router = require("express").Router(); //import router function in express package
let AdminModel = require("../models/AdminModel");

//Add Admin (http://localhost:8070/admin/add)
router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = Number(req.body.contactNumber);
    const address = req.body.address;
    const email = req.body.email;
    const dateOfBirth = req.body.dateOfBirth;
    const nic = req.body.nic;
    const gender = req.body.gender;


    const newAdminModel = new AdminModel({
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        gender
    })

    //pass the variables to database
    newAdminModel.save().then(() => {
        res.json("admin added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})

//GET ALL admin DETAILS (http://localhost:8070/admin/)
router.route("/").get((req, res) => {

    AdminModel.find().then((admin) => {
        res.json(admin) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})




module.exports = router;