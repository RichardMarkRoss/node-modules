const greet = require('./greetings.js');
const chalk = require('chalk');


console.log(greet('Xola'));

var message = chalk.bgGreen.black(greet("ROSS"));

console.log(message);
// module.exports = function(name){
//     return 'Hello, ' + name;
//   }
var figlet = require('figlet');
 
// figlet('WHY?', function(err, data) {
//     if (err) {
//          console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

// figlet('WHY?', function(err, data) {
  
//         return console.log(data);
// });


figlet.text('ROSS', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});