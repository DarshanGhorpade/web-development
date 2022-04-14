// To prompt user to enter name and capitalise first letter of name and rest of letters to lower case.

var name = prompt("Enter your name");

var firstChar = name.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1, name.length);

var lowerRestOfName = restOfName.toLowerCase();

var capitalisedName = upperCaseFirstChar + lowerRestOfName;

alert("Hello "+capitalisedName);