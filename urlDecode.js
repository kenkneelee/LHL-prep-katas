const urlDecode = function (text) {
  // Declare empty output object
  let outputObject = {};
  // Remove the &'s and split into array of strings
  let split = text.split("&");
  // Iterate through each string
  for (let i = 0; i < split.length; i++) {
    // Change "%20"s to clean up strings before splitting them into [property, value] pairs
    split[i] = split[i].replaceAll("%20", " ").split("=");
  }

  // Iterate through the [property, value] array pairs and convert them into object key:value pairs
  for (let pair of split) {
    outputObject[pair[0]] = pair[1];
  }

  return outputObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
