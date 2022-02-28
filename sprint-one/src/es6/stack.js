class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
    this.keys = 0;

  }

  push(value) {
    this.storage[this.keys] = value;
    this.keys++;
  }

  pop() {
    if (this.keys > 0) {
      delete this.storage[this.keys]
      this.keys--;
      return this.storage[this.keys]

    }
  }

  size() {
    return this.keys;
  }
}