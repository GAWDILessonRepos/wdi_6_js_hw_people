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
    var index = this.friends.indexOf(friend);
    this.friends.splice(index);
  }
};

var jack = new Person('jack', 'fields');
var fred = new Person('fred', 'sampson')
var sam = new Person('sam', 'black', 12, 34, 21, [fred]);
sam.addFriend(jack);
console.log(sam.friends);
sam.removeFriend('jack');
console.log(sam.friends);
