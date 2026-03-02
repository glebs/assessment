// Safely parse previous value
let previous = parseFloat(output.firstItem);
if (isNaN(previous)) previous = 0;

// Safely parse new copied value
let current = parseFloat(maestro.copiedText);
if (isNaN(current)) current = 0;

// Add them
const combined = previous + current;

// Log for debugging
console.log("Previous:", previous);
console.log("Current:", current);
console.log("Sum:", combined);

// Store back into Maestro output
output.combined = String(combined);
