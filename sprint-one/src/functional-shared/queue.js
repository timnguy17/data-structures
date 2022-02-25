var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function () {
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return temp;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};