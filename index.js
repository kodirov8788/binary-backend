const express = require("express")
const app = express()
const Users = require("./routers/Users")
const mongoose = require("mongoose")
const TelegramBot = require('node-telegram-bot-api');
const cors = require("cors")
app.use(express.json())
app.use(cors())

// const url = "mongodb+srv://store:store@my-datebase.ahjsj8w.mongodb.net/users?retryWrites=true&w=majority"
// mongoose.connect(url)

// app.use("/users", Users)

const botToken = '5774343261:AAF3Zvb8KQtHzqfZSxDpd7YrDyulSatzotI';
const bot = new TelegramBot(botToken);


app.post('/submitform', (req, res) => {
    const { name, email, message } = req.body;
    console.log(name)
    console.log(email)
    console.log(message)
    const chatId = '-1001761027079';
    const text = `New form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    bot.sendMessage(chatId, text)
        .then(() => {
            res.send('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error sending message to Telegram:', error);
            res.status(500).send('An error occurred while submitting the form.');
        });
});
let PORT = 5000
app.listen(PORT, () => {
    console.log(`bizning sayt port ${PORT}da eshitilmoqda`)
})