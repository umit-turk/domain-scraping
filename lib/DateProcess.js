const moment = require('moment');
const Enum = require('../config/Enum');

class DateProcess {
    static getDateQuery(date){
        if(moment(date).isValid()){
            date = moment(date).format(Enum.DATE_FORMAT);
        }else{
            date = moment().format(Enum.DATE_FORMAT);
        }
        return date;
    }
}

module.exports = DateProcess;