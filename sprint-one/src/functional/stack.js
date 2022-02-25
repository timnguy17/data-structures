var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var keys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[keys] = value;
    keys++;
  };

  someInstance.pop = function() {
    if ( keys > 0) {
      delete storage[keys];
      keys--;
      return storage[keys];
    }
  };

  someInstance.size = function() {
    return keys;

  };

  return someInstance;
};
