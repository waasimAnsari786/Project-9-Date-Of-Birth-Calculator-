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

const cnvtValInZero = (element , element2 , msg) => {
    alert(`${msg}`);
    element.value = `` ;
    element2.value = `` ;
};

const calcOfLifeDaysAndAge = (userDate , rough1 , userMonth , rough2) => {
    for (let d = userDate; d < date; d++) {
        rough1++
    }

    for (let m = userMonth; m < month; m++) {
        rough2++
    }

    alert(`You are ${rough1} days old! \nYou are ${rough2} months old! \nYour life days are ${rough2 * 30 + rough1}!`);
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

        else if (userDate >= date && userMonth > month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `Correct your DOB's date or month because it's greater than today's date!`);
        }

        else if (userDate < date && userMonth > month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `Correct your DOB's date or month because it's greater than today's date!`);
        }

        else if (userDate === date && userMonth === month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `The DOB you provided to me, that's a new born baby's DOB who borned on today and he is just few hours old. You can ask me his age tomorrow or after few days or years. \n\n May Allah bless him a good, healthy and long life with lots happiness and success!`);
        }

        else if (userDate > date && userMonth < month && userYear === year) {
            let rough = 1;
            let rough2 = 1;

            calcOfLifeDaysAndAge(userDate , rough , userMonth + 1 , rough2);
        }

        else if (userDate < date && userMonth < month && userYear === year) {
            let rough = 1;
            let rough2 = 1;
            
            calcOfLifeDaysAndAge(userDate , rough , userMonth + 1 , rough2);
        }

    }

    else{
        cnvtValInZero(userAge , lifeDays , `Please enter a valid Date Of Birth`);
    }
};

submitBtn.addEventListener("click", () => {
    splitUserDOBFunc(userDOB.value);
});