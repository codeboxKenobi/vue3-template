import axios from "axios";

export default async function network(queryData) {
    const { url, method, params, data } = queryData
    const config = {
        url: url, // url - URL, на который будет сделан запрос.

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    if (!method) {
        config["method"] = "get";
    } else {
        config["method"] = method;
    }

    if (!params) {
        config["params"] = {};
    } else {
        config["params"] = params;
    }

    if (!data) {
        config["data"] = {};
    } else {
        config["data"] = data;
    }
    console.log(config);

    await axios(config);
}
