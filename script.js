const firstName = "Joe";
const lastName = "Perez";
const ssn = 1234567;

console.log(`<p>${firstName} ${lastName} has a social ${ssn}</p>`);


/**
 * Create a Backpack object.
 */

 const backpack = {
    name: "Everyday Backpack", //separated by comma
    volume: 30,
    color: "grey", //only contain letters, digits, dollar signs, underscore
    pocketNum: 15,
    strapLength: { //camelCase property names avoid issues
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  

  console.log("The backpack object:", backpack);
  console.log("The pocketNum value:", backpack.pocketNum); //dot notation - most common
  console.log("The strapLength Left value:", backpack.strapLength.left);

  console.log("The pocketNum value:", backpack["pocketNum"]); //bracket notation - need to pass variable or property with non-standard characters
  var query = "pocketNum";
  console.log("The pocketNum value:", backpack[query]);