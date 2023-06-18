const express = require("express")
const app = express()
const Users = require("./routers/Users")
const TelegramBot = require('node-telegram-bot-api');
const cors = require("cors")
app.use(express.json())
app.use(cors())
require('dotenv').config();


const bot = new TelegramBot(process.env.BOT_TOKEN);


app.post('/submitform', (req, res) => {
    const { name, email, number, info } = req.body;
    // console.log(name)
    // console.log(email)
    // console.log(number)
    // console.log(info)
    const chatId = process.env.CHAT_ID;
    const text = `New form submission:\nName: ${name}\nEmail: ${email}\nInfo: ${info}\nPhoneNumber: ${number}`;
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