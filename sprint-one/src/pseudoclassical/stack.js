var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keys = 0;

};


Stack.prototype.push = function(value) {
  this.storage[this.keys] = value;
  this.keys++;
};

Stack.prototype.pop = function() {
  if (this.keys > 0) {
    delete this.storage[this.keys];
    this.keys--;
    return this.storage[this.keys];
  }
};

Stack.prototype.size = function() {
  return this.keys;
};


var someInstance = new Stack();


