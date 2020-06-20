// Starting server
const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});

// Starting server

let TelegramBot = require('node-telegram-bot-api'),
    token = '1264102208:AAG2odfAZmrurchSALRGjMdDyik0Xyr_Ho4';

let bot = new TelegramBot(token, {
    polling: true,
    none_stop: true
});

let mainOptions = {
    "reply_markup": {
        "keyboard": [
            ["Hi 😁"],
            ["Keyboard ⌨️"],
            ["I'm robot 🤖"]
        ]
    }
};

bot.on('message', (msg) => {
    if (msg.text === '/start') {
        bot.sendMessage(msg.chat.id, "Добро пожаловать в главное меню бота!", mainOptions);        
    }
    
});



bot.on('message', (msg) => {
    let hi = "Hi 😁",
        keyboard = "Keyboard ⌨️",
        robot = "I'm robot 🤖";
    if (msg.text === hi) {
        bot.sendMessage(msg.chat.id, "Привет " + msg.from.first_name + "!", {
            "reply_markup": {
                "keyboard": [
                    ["Next option"],
                    ["<- Back"]
                ]
            }
        });
    } else if (msg.text === keyboard) {
        bot.sendMessage(msg.chat.id, "Да, поклацал кнопочки, бывает");
    } else if (msg.text === robot) {
        bot.sendMessage(msg.chat.id, "А я типа не робот");
    } else if (msg.text === '<- Back') {
        bot.sendMessage(msg.chat.id, text = "Вы вернулись в Главное меню!", mainOptions);
    } else {
        if (msg.text === '/start') {
            return false;
        } else {
            bot.sendMessage(msg.chat.id, "Я пока что не настолько умён. Отправил ответ админу.\n\nBot is running on Node.js(v12.18.1) + Hiroku + Github.\nMade by @MrGregorK", mainOptions);
            bot.sendMessage(msg.chat.id = '466777337', '<b>Сообщение от</b>: ' + msg.from.first_name + ' ' + msg.from.last_name + '\n<b>Username:</b> @' + msg.from.username + '\n<b>User chat ID</b>: ' + msg.from.id + '\n----------------\n' + msg.text, {
                parse_mode: "HTML"
            });
        }

    }
});