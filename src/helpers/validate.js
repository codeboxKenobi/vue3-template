/* eslint-disable */
const message = {
    email: "Некорректный Email",
    password: "Некорректный пароль",
    passwordConfirm: "Пароли не совпадают"
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(email);
}

function validatePassword(pass) {
    var re = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    return !re.test(pass);
}

function validatePasswordConfirm(passArr) {
    if (passArr[0] !== "" && passArr[1] !== "") {
        if (passArr[0] === passArr[1]) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
    
}

function validate(rules) {
    let errors = {
        count: 0
    };

    rules.forEach(r => {
        if (r.type === "email") {
            errors[r.type] = { 
                field: r.type, 
                error: validateEmail(r.value), 
                message: validateEmail(r.value) ? message[r.type] : "",
            };
            errors[r.type].error ? errors.count +=1 : '';
        }

        else if (r.type === "password") {
            errors[r.type] = { 
                field: r.type, 
                error: validatePassword(r.value), 
                message: validatePassword(r.value) ? message[r.type] : "",
            };
            errors[r.type].error ? errors.count +=1 : '';
        }

        else if (r.type === "passwordConfirm") {
            errors[r.type] = { 
                field: r.type, 
                error: validatePasswordConfirm(r.value), 
                message: validatePasswordConfirm(r.value) ? message[r.type] : "",
            };
            errors[r.type].error ? errors.count +=1 : '';
        }
    });

    return errors;
}

module.exports = validate;