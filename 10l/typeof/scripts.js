
var a = prompt();

switch(typeof a) {

  case 'number':
    console.log("1");
    break;

  case 'string':
    console.log("2");
    break;

  case 'boolean':
    console.log("3");
   break;
 
  case 'null':
    console.log("4");
   break;

  case 'underfined':
    console.log("5");
   break;
 
  case 'object':
    console.log("6");

}