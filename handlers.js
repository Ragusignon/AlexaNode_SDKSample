var handlers = {

    'LaunchRequest': function () {

        this.emit('HelloWorldIntent');

    },

    'HelloWorldIntent': function () {

        this.emit(':tell', 'Hello World!');
      }
      'SwitchLight':function () {
        var speechOutput="Please let me know which light need to be switched off";
        var reprompt="Please let me know which light need to be switched off";
        this.emit(':ask',speechOutput, reprompt);
      }
};
