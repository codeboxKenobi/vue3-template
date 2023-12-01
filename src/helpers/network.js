import axios from "axios";

async function network(url, method, params, data) {
    await axios[method]({
        url: url, // url - URL, на который будет сделан запрос.
        params: params, // params - параметры URL, которые будут отправлены с запросом.
        data: data, // data - данные, которые будут отправлены как тело запроса ( PUT, POST, DELETE, PATCH ).
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
};

module.exports = network;