
const moment = require('moment');
// moment.tz.setDefault("Canada/Vancouver");
function formatMessage(username, text){
    return{
        username,
        text,
        time: moment.utc().format('hh:mm a')
    }
}

module.exports = formatMessage;