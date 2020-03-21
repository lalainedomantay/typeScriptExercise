"use strict";
/*
    HOW TO USE: Pass the year value upon instantiating Year object (givenYear variable)

    Problem Statement:
    Given a year, report if it is a leap year.
    The tricky thing here is that a leap year in the Gregorian calendar occurs:
        - on every year that is evenly divisible by 4
        - except every year that is evenly divisible by 100
        - unless the year is also evenly divisible by 400
    For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
*/
class Year {
    constructor(year) {
        this.year = year;
    }
    isLeapYear() {
        let isLeapYear = false;
        isLeapYear = ((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0);
        return isLeapYear ? 'Yes' : 'No';
    }
}
let givenYear = new Year(2000);
let isLeapYear = givenYear.isLeapYear();
let htmlContainer = document.querySelector('p');
htmlContainer.textContent = 'Is ' + givenYear.year + ' a leap year? ' + isLeapYear + '.';
