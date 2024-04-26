let userDOB = document.querySelector("#user-DOB");
let lifeDays = document.querySelector("#life-days");
let userAge = document.querySelector("#user-age");
let submitBtn = document.querySelector("#submit-btn");

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

const printUserAge = (userAgeVal, userlifeDaysVal, systemYear, userYearVal) => {
    userAgeVal.value = systemYear - userYearVal;
    userlifeDaysVal.value = userAgeVal.value * 365;
};

const cnvtValInZero = (element) => {
    element.value = `` ;
};

const splitUserDOBFunc = (element) => {
    let splitUserDOB = element.split(" ");
    let userDate = +splitUserDOB[0];
    let userMonth = +splitUserDOB[1];
    let userYear = +splitUserDOB[2];
    let userYear2 = userYear + 1;

    if (userDate <= 31 && userMonth <= 12 && userYear <= year) {

        if (userDate > date && userMonth > month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
        }

        else if (userDate < date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
        }

        else if (userDate === date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
        }

        else if (userDate <= date && userMonth > month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
        }

        else if (userDate <= date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
        }

        else if (userDate >= date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
        }

        else if (userDate > date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
        }

        else if (userDate < date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
        }

    }

    else{
        alert(`Please enter a valid Date Of Birth`);
        cnvtValInZero(userDOB);
    }
};

submitBtn.addEventListener("click", () => {
    splitUserDOBFunc(userDOB.value);
});