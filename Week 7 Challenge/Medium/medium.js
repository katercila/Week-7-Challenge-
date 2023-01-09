var upper = "UPPER"
var lower = "lowercase"
var normal = "Normal"

// prompt is a function that displays a dialog box 
var input = prompt('Type a word uppercase, lowercase, or normally')

// === tests if two operands are equal 
// alert() pop up box
if (input === input.toUpperCase()) {
    alert(upper)
  console.log("SHOUTING");
} 
else if (input === input.toLowerCase()) {
    alert(lower)
  console.log("whispering");
} 
else (input === input.toNormal()) {
    alert(normal)
  console.log("talking normally");
}