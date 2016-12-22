'use strict';

var Alexa = require('alexa-sdk');
var handlers = require('./handlers');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    //alexa.appId = constants.appId;
    //alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        handlers.handlerIntent
        //add multiple handlers as per our requirement
    );
    alexa.execute();

};
