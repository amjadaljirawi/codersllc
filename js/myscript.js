'use strict';
alert ('Welcom');
var txt;
var r = confirm("Are you a Matar volunteer?");
if (r == true) {
  txt = "Thank You for your efforts";
} else {
  txt = "see you next time";
}
document.write('<h3>' + txt + '</h3>');

var hours = prompt('Please enter your tatal volunteering hours');
var volunteer;
if (hours > 50 && hours <= 100) {
      volunteer = 'You are Great';
    } else if (hours > 20 && hours <= 50) {
        volunteer = 'you are good but need more';
    } else if (hours >= 0 && hours <= 20 ) {
        volunteer  = 'Do more efort to help others';
    } else {
        volunteer  = 'Something went wrong!';
    }
    document.write('<h3>' + volunteer + '</h3>');
    