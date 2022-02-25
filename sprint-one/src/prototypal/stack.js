var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.keys = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.keys] = value;
  this.keys++;
};

stackMethods.pop = function() {
  if (this.keys > 0) {
    delete this.storage[this.keys];
    this.keys--;
    return this.storage[this.keys];
  }
};

stackMethods.size = function() {
  return this.keys;
};


