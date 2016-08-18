(function(exports) {

  function isTrue(functionName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + functionName + " is NOT truthy");
    } else {
      console.log(functionName + " passes");
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT falsy");
    }
  }

  exports.assert = {
  isTrue: isTrue,
  isFalse: isFalse
}
})(this);
