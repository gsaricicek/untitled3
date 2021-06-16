//all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object.
//To fire an event, use the emit() method.
//Here we have created a function that will be executed when a "scream" event is fired.
var events = require('events');
var eventEmitter = new events.EventEmitter();  //eventEmitter yaratılıyor.

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream'); //scream yerine başka bir string olsaydı event fire edilmezdi.