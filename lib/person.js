var Person = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  age ? this.age = age : this.age = 30;
  weight ? this.weight = weight : this.weight = 150;
  height ? this.height = height : this.height = randomHeight();
  friends ? this.friends = friends : this.friends = [];
};

var randomHeight = function() {
  return Math.floor((Math.random() * 19) + 60);
};

Person.prototype = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  weightInStone: function() {
    return Math.floor(this.weight / 14).toString() + " full stones.";
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  },
  removeFriend: function(friend) {
    var index;
    for (var i = 0; i < this.friends.length; i++) {
      if (this.friends[i].fullName() === friend) {
        console.log(i);
        this.friends.splice(i, 1);
      }
    }
  },
  greetPeople: function(arrayOfFriends, message) {
    var arr, msg;
    arrayOfFriends ? arr = arrayOfFriends : arr = this.friends;
    message ? msg = message : msg = "Hi";
    var greeting = "";
    for (var i = 0; i < arrayOfFriends.length; i++) {
      greeting += arr[i].fullName() + ": " + msg + "\n"
    }
    return greeting;
  }
};

var fred = new Person('Fred', 'Sampson');
var jack = new Person('Jack', 'Stone');
var sam = new Person('Sam', 'Black', 12, 100, 45, [fred]);
var marge = new Person('Marge', 'Johnson', 1, 2, 3, [fred, jack, sam]);
var tom = new Person('Tom', 'Bargar');
var steve = new Person('Steve', 'Myer');
var don = new Person('Don', 'Johnson', 300, 300);
var bob = new Person('Bob', 'Belcher');
  bob.friends = [tom, marge, don];
var linda = new Person('Linda', 'Belcher');
  linda.age = 45;
var charlie = new Person('Charlie', 'Kelly')
  charlie.weight = 270;
