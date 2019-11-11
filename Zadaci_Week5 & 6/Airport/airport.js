function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function() {
        return name + " " + surname;
    }
}

function Seat(number, category) {
    this.number = number;
    this.category = category ? category : "e";
    this.getData = function() {
        return "number: " + this.number + " category: " + this.category;
    }

}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function() {
        return person.getData() + " " + seat.getData();
    }
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassenger = [];
    this.numberOfPassenger = 0;
    this.addPassenger = function(passenger) {
        this.listOfPassenger.push(passenger);
        this.numberOfPassenger++;
    }
    this.getData = function() {
        var output = String(this.date.getDate()) + ". " + String(this.date.getMonth()) + ". " + String(this.date.getFullYear()) + ", " + relation + '\n';
        for (var i in this.listOfPassenger) {
            output += '\t' + this.listOfPassenger[i].getData() + "\n";
        }
        return output;
    }
}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalPassenger = 0;
    this.addFlight = function(flight) {
        this.listOfFlights.push(flight);
        this.totalPassenger += flight.numberOfPassenger;
    }
    this.getData = function() {
        var output = "Airport: " + this.name + ", total passengers: " + this.totalPassenger + '\n';
        for (var i in this.listOfFlights) {
            output += /* '\t' + */ this.listOfFlights[i].getData();
        }
        return output;
    }
}

var pera = new Person("Pera", "Peric");
//console.log(pera.getData());

var sediste = new Seat(1);
//console.log(sediste.getData());

var peraPutnik = new Passenger(pera, sediste);
//console.log(peraPutnik.getData());

var Let = new Flight("Beograd - Budva", new Date());

for (var i = 0; i < 10; i++) {
    Let.addPassenger(peraPutnik);
}
//console.log(Let.getData());

var NikolaTesla = new Airport();


for (var i = 0; i < 10; i++) {
    NikolaTesla.addFlight(Let);
}
console.log(NikolaTesla.getData());