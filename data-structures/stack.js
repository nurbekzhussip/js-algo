//LIFO

var isValid = function (s) {
  let stack = [];
  let arr = s.split("");

  const bracketTypes = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < arr.length; i++) {
    if (!bracketTypes[arr[i]]) {
      stack.push(arr[i]);
    } else {
      if (bracketTypes[arr[i]] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
