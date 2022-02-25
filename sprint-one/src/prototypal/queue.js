var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  //returns a blank object that will link to queue methods--delegates failed object look ups to queuemethods
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function () {
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return temp;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

