const firstName = "Joe";
const lastName = "Perez";
const ssn = 1234567;

console.log(`<p>${firstName} ${lastName} has a social ${ssn}</p>`);


/**
 * Create a notebook object.
 */

 const notebook = {
    name: "Everyday Notebook", //separated by comma
    volume: 40,
    color: "red", //only contain letters, digits, dollar signs, underscore
    pocketNum: 30,
    strapLength: { //camelCase property names avoid issues
      left: 30,
      right: 30,
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
  

  console.log("The notebook object:", notebook);
  console.log("The pocketNum value:", notebook.pocketNum); //dot notation - most common
  console.log("The strapLength Left value:", notebook.strapLength.left);

  console.log("The pocketNum value:", notebook["pocketNum"]); //bracket notation - need to pass variable or property with non-standard characters
  var query = "pocketNum";
  console.log("The pocketNum value:", notebook[query])