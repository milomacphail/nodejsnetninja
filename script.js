var events = require('events');
var util = require("util");

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg);
    });
});

james.emit ('speak', ' hey dudes ');
mary.emit ('speak', 'I want a curry');