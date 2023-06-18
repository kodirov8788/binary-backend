const mongoose = require("mongoose");
const router = require("express").Router()

const User = mongoose.model('User', {
    name: String,
    lastname: String,
    number: Number,
    info: String
});


router.get("/get", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send("Error retrieving cats");
    }
})

router.post("/create", async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age
    });

    await newUser.save()
        .then(() => res.status(201).send("yaratildi"))
        .catch(error => res.status(404).send("error bor"))
})



module.exports = router