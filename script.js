function parseCode(str) {
  // Split the string using one or more zeros as the delimiter
  const parts = str.split(/0+/);

  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}

// Example usage:
console.log(parseCode("John000Doe000123"));       // { firstName: "John", lastName: "Doe", id: "123" }
console.log(parseCode("michael0smith004331"));    // { firstName: "michael", lastName: "smith", id: "4331" }
console.log(parseCode("Thomas00LEE0000043"));     // { firstName: "Thomas", lastName: "LEE", id: "43" }
