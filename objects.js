console.log(__filename);
console.log(__dirname);

// Used as callback function in timeout/interval functions.
function sayHello() {
    console.log('Hello, World!');
}

// Call sayHello once after 2s.
const t1 = setTimeout(sayHello, 2000);
// clearTimeout(t1); // Need to comment out to see setTimeout effect.

// Repeatedly call sayHello every 2s.
const t2 = setInterval(sayHello, 2000);
clearInterval(t2); // Need to comment out to see setInterval effect.

// Some Global Objects
// ~~~~~~~~~~~~~~~~~~~
// 1. Console
// 2. Process

// Some Utility Modules
// ~~~~~~~~~~~~~~~~~~~~
// 1. OS
// 2. Path
// 3. Net
// 4. DNS
// 5. Domain
