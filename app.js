let userDOB = document.querySelector("#user-DOB");
let lifeDays = document.querySelector("#life-days");
let userAge = document.querySelector("#user-age");
let submitBtn = document.querySelector("#submit-btn");

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let allInpAndPerasInner = document.querySelector(".all-inp-ctnr-inner");

let createNewDiv = document.createElement("div");
createNewDiv.classList.add("col-12" , "ctnr-of-inp-and-peras");
allInpAndPerasInner.append(createNewDiv);

let ageAndDaysInputSec = document.querySelector("#age-and-days-input-sec");
createNewDiv.append(ageAndDaysInputSec);

let createNewDiv2 = document.createElement("div");
createNewDiv2.classList.add("col-12" , "ctnr-of-peras");
createNewDiv.append(createNewDiv2);

let newDiv = document.querySelector(".ctnr-of-inp-and-peras");
let ctnrOfNewPeras = document.querySelector(".ctnr-of-peras");


for (let index = 0; index < 2; index++) {
    let createnewPeras = document.createElement("p");
    createnewPeras.classList.add("user-lifedays-and-age" , "mt-4");
    createnewPeras.setAttribute("id" , `new-pera-${index + 1}`);
    createNewDiv2.append(createnewPeras);
};

const slider = (element , timer) => {
    setTimeout(() => {
        element.style.transform = `translateX(-100%)`;
    }, timer);
};

const printDetailsOfAgeAndLifeDays = (userAgeValue , userlifeDaysValue) => {
    let str = `You are ${+userAgeValue} years old as well as if Allah wills you will be ${+userAgeValue + 1} years old!`;
    
    let str2 = `Your life days are ${+userlifeDaysValue} along with that if Allah wills you will complete your life's ${+userlifeDaysValue + 365} days!`;
    
    let newPera1 = createNewDiv2.children[0];
    let newPera2 = createNewDiv2.children[1];

    newPera1.innerText = str;
    newPera2.innerText = str2;
};

const printUserAge = (userAgeVal , userlifeDaysVal , systemYear, userYearVal) => {
    userAgeVal.value = systemYear - userYearVal;
    userlifeDaysVal.value = userAgeVal.value * 365;

    let finalAgeOfUser = userAgeVal.value;
    let finalDaysOfUserLife = userlifeDaysVal.value;
    
    slider(ageAndDaysInputSec , 2000);
    slider(ctnrOfNewPeras , 3000);

    printDetailsOfAgeAndLifeDays(finalAgeOfUser , finalDaysOfUserLife);
};

const cnvtValInZero = (element , element2 , msg) => {
    alert(`${msg}`);
    element.value = `` ;
    element2.value = `` ;
};

const printUserAge2 = (userDate , daysCountVal , userMonth , monthCountVal , systemYear) => {
    for (let d = userDate; d < date; d++) {
        daysCountVal++;
    }

    for (let m = userMonth; m < month; m++) {
        monthCountVal++;
    }

    userAge.value = ``;
    lifeDays.value = ``;
    
    // alert(`You are ${daysCountVal} days old! \nYou are ${monthCountVal} months old! \nYour life days are ${monthCountVal * 30 + daysCountVal}!`);
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

        else if (userDate > date && userMonth >= month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `Correct your DOB's date or month because it's greater than today's date!`);
        }

        else if (userDate < date && userMonth > month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `Correct your DOB's date or month because it's greater than today's date!`);
        }

        else if (userDate === date && userMonth === month && userYear === year) {
            cnvtValInZero(userAge , lifeDays , `The DOB you provided to me, that's a new born baby's DOB who borned on today and he is just few hours old. You can ask me his age tomorrow or after few days or years. \n\nMay Allah bless him a good, healthy and long life with lots happiness and success!`);
        }

        else if (userDate >= date && userMonth < month && userYear === year) {
            let daysCount = 0;
            let monthCount = 1;
            let newDate = userDate - date;

            printUserAge2(userDate , daysCount - newDate , userMonth + 1 , monthCount , year);
        }

        else if (userDate < date && userMonth < month && userYear === year) {
            let daysCount = 1;
            let monthCount = 1;
                
            printUserAge2(userDate , daysCount , userMonth + 1 , monthCount , year);
        }

        else if (userDate < date && userMonth === month && userYear === year) {
            let daysCount = 0;
            let monthCount = 0;
                
            printUserAge2(userDate , daysCount , userMonth + 1 , monthCount , year);
        }

    }

    else{
        cnvtValInZero(userAge , lifeDays , `Please enter a valid Date Of Birth`);
    }
};

submitBtn.addEventListener("click", () => {
    splitUserDOBFunc(userDOB.value);
});

userAge.addEventListener("input" , () => {
    cnvtValInZero(userAge , lifeDays , `You are unable to input any value in the input field!`);
});

lifeDays.addEventListener("input" , () => {
    cnvtValInZero(userAge , lifeDays , `You are unable to input any value in the input field!`);
});