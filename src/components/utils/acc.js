import userRules from "./utils.js"
const ruleList = userRules;
export default function getAccess(rule) {
    let result;
    for (let i = 0; i < ruleList.length; i++) {
        if (ruleList[i] === rule) {
            result = true
        }
    }
    return result;
}