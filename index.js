// console.log("hellooo!");

// function helloWord( {
//     alert("hellooo!");
//     console.log("hellooo!");

// };

// helloWord();

// helloWord2();

// function helloWord( {
//     alert("hellooo!");
//     console.log("hellooo!");

// };

// helloword();

// ANONYMOUS FUNCTION
// (function() {
//     alert("hello!");
// })();

// // ?();

// function() {
//     alert('helloWord');
// }


// var name = 'kim';

// console.log(name);

// var hello2 = function(x,y) {
//     let one = x;
//     let two = y;
//     return one+two;
// };

// console.log(hello2('kim','2'));

// xv234 = greetings for homepage
// function xv234() {
   // return "hello!"
//}

// function h1Greeting() {
//     return "Hello!";
// }


// var h1Greeting = document.getElementById('greeting');

// // this is the code for the greetings

// h1Greeting.textContent = (function() {
//     return "Hello!"
// })();

// h1Greeting,textContent = h1Greetings();

// (function function() {
//     alert("Hello!");
// })();

// ACTIVITY2 = LESSON2

(function() {
    var school = {  // OBJECT
        name: 'Guagua National Colleges',
        regularRate: 12000,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.regularRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }
var courseName, regularRate, specialRate;
courseName = document.getElementById('courseName');
courseName.textContent = school.name;

regularRate = document.getElementById('regularRate');
regularRate.textContent = `From: ₱ ${school.regularRate}`;

specialRate = document.getElementById('specialRate');
specialRate.textContent = `To: ₱ ${school.offerPrice()}`;

// PART 2 DISCOUNT DAY COUNTDOWN
var expMessage, today, expEnds;

function offerExpires(today) {
    var weekToday, dayName,  day, monthToday, month, datetoday, year;
    // this is the computation for the milliseconds from adding the (7 days a week)
    weekToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    day = dayNames [weekToday.getDay()];

    monthToday = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    month = monthToday [weekToday.getMonth()];

    datetoday = [weekToday.getDate()];

    year = [weekToday.getFullYear()];


    expMessage = `Enroll Now!!! offer expires next ${day}, ${month} ${datetoday}, ${year}.`;
//     expMessage = `Enroll Now!!! offer expires next `;
//     expMessage += day;

    return expMessage;
}

today = new Date();
expEnds = document.getElementById('offerEnds');
expEnds.textContent = offerExpires(today);

}());

