// my variables for accessing different elements of HTML
let userDOB = document.querySelector("#user-DOB");
let lifeDays = document.querySelector("#life-days");
let userAge = document.querySelector("#user-age");
let submitBtn = document.querySelector("#submit-btn");
let resetBtn = document.querySelector("#reset-btn");

// i created this array for printing use DOB month with it's name
let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

// these variables are for getting current date, month and year
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();






// now this code is for creating some HTML elements t=start


// this variable is for accessing an element of HTML because i created some HTML elements form JavaScript so and i inserted them into this variable's element
let allInpAndPerasInner = document.querySelector(".all-inp-ctnr-inner");

// i created a div and appended it into that element which stored in above variable
let createNewDiv = document.createElement("div");
createNewDiv.classList.add("col-12", "ctnr-of-inp-and-peras");
allInpAndPerasInner.append(createNewDiv);

// i didn't create this element fromjava Script but i appended it into an element which i created above. it's variables name is "createNewDiv"
let ageAndDaysInputSec = document.querySelector("#age-and-days-input-sec");
createNewDiv.append(ageAndDaysInputSec);

// i created this div for inserting some peragraph tags which also created by JavaScript. i appended this div into thatdiv which i created first above
let createNewDiv2 = document.createElement("div");
createNewDiv2.classList.add("col-12", "ctnr-of-peras");
createNewDiv.append(createNewDiv2);

//  these variables are for accessing some elements because i will insert some pearagraph tags in these
let newDiv = document.querySelector(".ctnr-of-inp-and-peras");
let ctnrOfNewPeras = document.querySelector(".ctnr-of-peras");

// i created some peragraph tags using for loop and appended them into that div which created first above
for (let index = 0; index < 2; index++) {
    let createnewPeras = document.createElement("p");
    createnewPeras.classList.add("user-lifedays-and-age", "mt-4");
    createnewPeras.setAttribute("id", `new-pera-${index + 1}`);
    createNewDiv2.append(createnewPeras);
};

// now this code is for creating some HTML elements end

// these variables is for storing those peragraph tags which i created above, for adding some texts in it
let newPera1 = createNewDiv2.children[0];
let newPera2 = createNewDiv2.children[1];

/* this function slides any element according to values of it's arguments. in this function
 i passed 3 params. first for that element which i want to slide, second is for set the time
  of "settimeOut" method because this function will slide any element after the given time to
   "serTimeOut" method, third is for set the value of the CSS's property "transform translate" */
const slider = (element, timer , propertyVal) => {
    setTimeout(() => {
        element.style.transform = `translateX(${propertyVal}%)`;
    }, timer);
};

/* i created this function is for printing user's age value and life days in detail. i passed some params in it.
1. "msgElement and msgElement2" params are for passed those elements in which i want to print the
    msg
    
2. "userAgeValue and userlifedaysValue" are for getting the user's age value and his life days value.
    basically i called this function into "printDetailsOfAgeAndLifeDays" function so it is getting all
    the param's value from that function

3."" userAgeVal and userLifeDaysValue" this paramters are for getting the values of user's age life days
    then print this value in the peragraph tags
    
4. "userDate , monthname and curryear" these variables is for printing the futue date of birth of user
    
5.  this fnction prints complete details of user's age and life days and it also prints the user's future 
    DOB. you can understand it by writtnig yourself */
const printMsg = (msgElement, msgElement2, userAgeValue, userlifeDaysValue, userDate, monthName, currYear) => {
    let str = `You are ${+userAgeValue} years old as well as if Allah wills you will be ${+userAgeValue + 1} years old on ${userDate} ${monthName} ${currYear}!`;
    let str2 = `Your life days are ${+userlifeDaysValue} along with that if Allah wills you will complete your life's ${+userlifeDaysValue + 365} days on ${userDate} ${monthName} ${currYear}!`;

    msgElement.innerText = str;
    msgElement2.innerText = str2;
};

/* this function ias also print the msg in the peragraphs tags but this function is for those DOB's
    which will be of current year. this varuiable is also gets parameteres. i called this function 
    into "printDetailsOfAgeAndLifeDays2" and it is getting all the param's value from that function*/
const printMsg2 = (msgElement, msgElement2, daysCountVal, monthCountVal, userDate, monthName, currYear) => {
    let str = `You are ${monthCountVal} months and ${daysCountVal} days old! moreover if Allah wills you will be 1 year old on ${userDate} ${monthName} ${currYear}! Your life days are ${monthCountVal * 30 + daysCountVal}!`;
    let str2 = `May Allah bless you a good, healthy and long life with lots of happiness and success!`;

    msgElement.innerText = str;
    msgElement2.innerText = str2;
};

/*  i created this function is for printing user's age and life days in details with dates , months and years 
    this funxction is also contains four params for performing different actions
    
1. "userAgeVal and userLifeDaysVal": these parameters get the inputs of user age and life days then
    print the final value of user's age and life days into input field */
const printDetailsOfAgeAndLifeDays = (userAgeVal, userlifeDaysVal, systemYear, userYearVal) => {
    //  there is the code of "userAgeVal and userLifeDaysVal" params
    userAgeVal.value = systemYear - userYearVal;
    userlifeDaysVal.value = userAgeVal.value * 365;

    // then i stored the user's final age and lidfe days into 2 variables for use them, again for different actions
    let userAgeValue = userAgeVal.value;
    let userlifeDaysValue = userlifeDaysVal.value;

    /* this code is for splitting the user DOB because through this function i printed the details of 
    user's age and life days through "printMsg" function*/
    let splitUserDOB = userDOB.value.split(" ");
    let splitedUserDate = +splitUserDOB[0];
    let splitedUserMonth = +splitUserDOB[1];
    let splitedUserYear = +splitUserDOB[2];

/* here i used the "monthsNames" array for print the name of month in user's future DOb into 
    "prinMsg" function */
    monthsNames.map((monthsName, index) => {
        // i implemented 1 in the array's index for match them with the user DOB's month
        let newIdx = index + 1;

        /* then i matched user's month with the array's index and i did that with the "split" method
            which i wrote at the beginning of this function*/
      
        if (splitedUserMonth === newIdx) {
            if (splitedUserYear === userYearVal) {

                /*here i used "printmsg" function*/
                printMsg(newPera1, newPera2, userAgeValue, userlifeDaysValue, splitedUserDate, monthsName, year + 1);
            }

            else if (splitedUserYear < userYearVal) {
                printMsg(newPera1, newPera2, userAgeValue, userlifeDaysValue, splitedUserDate, monthsName, year);
            }

        }
    });
};

// this function prints the user's age and life days in the input feld it's not print complete details about it
const printUserAge = (userAgeVal, userlifeDaysVal, systemYear, userYearVal) => {
    userAgeVal.value = systemYear - userYearVal;
    userlifeDaysVal.value = userAgeVal.value * 365;

    /* i called here this function is for sliding the divs of input field and peragraphs tags after printing 
    the user's age and life days in the input field */

    /**i slided 2 divs through this function */
    slider(ageAndDaysInputSec, 3000 , -100);
    slider(ctnrOfNewPeras, 4000 , -100);
};

/* i created this function for giving to inputs a value of "0" on different conditions like i used
    this function when user will generate any error and when user will click on reset button and
    when user will try to input in the user's age and user's life days input field
    
    this function also contains an alert message*/ 
const cnvtValInZero = (element, element2, element3 , element4 , msg) => {
    alert(`${msg}`);
    element.value = ``;
    element2.value = ``;
    element3.innerText = ``;
    element4.innerText = ``;
    slider(ageAndDaysInputSec , 0 , 0);
    slider(ctnrOfNewPeras , 0 , 0);
};

/** this function alse prints the details of user's age and life days but when user DOB will be of 
    current year
    
    the process of printing details is totally same as like "printDetailsOfAgeAndLifeDays" function
    but there is just a difference between them is that this function will print hte details when 
    user' DOB will be of current year*/
const printUserAge2 = (userDate, daysCountVal, userMonth, monthCountVal) => {
    let splitedUserDOB = userDOB.value.split(" ");
    let splitedUserDate = +splitedUserDOB[0];
    let splitedUserMonth = +splitedUserDOB[1];
    let splitedUserYear = +splitedUserDOB[2];
    
    // this loop counts the days according to user's DOB
    for (let d = userDate; d < date; d++) {
        daysCountVal++;
    }
    
    // this loop counts the months according to user's DOB
    for (let m = userMonth; m < month; m++) {
        monthCountVal++;
    }
    
    userAge.value = ``;
    lifeDays.value = ``;
    
    slider(ageAndDaysInputSec, 3000 , -100);
    slider(ctnrOfNewPeras, 4000 , -100);

    monthsNames.map((monthsName, index) => {
        let newIdx = index + 1;

        if (splitedUserMonth === newIdx) {
            printMsg2(newPera1, newPera2, daysCountVal , monthCountVal , splitedUserDate , monthsName , year + 1);
        }
    });
};

/*
 * basically this function is the main function because when user click on submit btn after inserting
 *  his DOB then this function will separates the user's DOB into parts then this separated userDOB 
 * will checks on the behalf of following conditions and when these different conditions will be true
 * then different functions will be run
*/
const splitUserDOBFunc = (element) => {

    // this code is for splitting the user's DOB
    let splitUserDOB = element.split(" ");
    let userDate = +splitUserDOB[0];
    let userMonth = +splitUserDOB[1];
    let userYear = +splitUserDOB[2];
    let userYear2 = userYear + 1;

    /*
    *this condition checks that if user inserted any invalid value as a DOB in the input field if this 
    condition true then user will face an alert message for his guidance 
    */
    if (userDate <= 31 && userMonth <= 12 && userYear <= year) {

        /**after checking that the user DOB is valid then this function will check these conditions
         * these condition are for printing the user's age and life days for different situations
         */
        if (userDate > date && userMonth > month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear2);
        }

        else if (userDate < date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear);
        }

        else if (userDate === date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear);
        }

        else if (userDate <= date && userMonth > month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear2);
        }

        else if (userDate <= date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear);
        }

        else if (userDate >= date && userMonth < month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear);
        }

        else if (userDate > date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear2);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear2);
        }

        else if (userDate < date && userMonth === month && userYear < year) {
            printUserAge(userAge, lifeDays, year, userYear);
            printDetailsOfAgeAndLifeDays(userAge, lifeDays, year, userYear);
        }

        else if (userDate > date && userMonth >= month && userYear === year) {
            cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `Correct your DOB's date or month because it's greater than today's date! It's isn't making any sense.`);
        }

        else if (userDate < date && userMonth > month && userYear === year) {
            cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `Correct your DOB's date or month because it's greater than today's date! It's isn't making any sense.`);
        }

        else if (userDate === date && userMonth === month && userYear === year) {
            cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `The DOB you provided to me, that's a new born baby's DOB who borned on today and he is just few hours old. You can ask me his age tomorrow or after few days or years. \n\nMay Allah bless him a good, healthy and long life with lots happiness and success!`);
        }

        else if (userDate >= date && userMonth < month && userYear === year) {
            let daysCount = 0;
            let monthCount = 1;
            let newDate = userDate - date;

            printUserAge2(userDate, daysCount - newDate, userMonth + 1, monthCount, year);
        }

        else if (userDate < date && userMonth < month && userYear === year) {
            let daysCount = 1;
            let monthCount = 1;

            printUserAge2(userDate, daysCount, userMonth + 1, monthCount, year);
        }

        else if (userDate < date && userMonth === month && userYear === year) {
            let daysCount = 0;
            let monthCount = 0;

            printUserAge2(userDate, daysCount, userMonth + 1, monthCount, year);
        }

        // all conditions have ended
    }

    else {
        cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `Please enter a valid Date Of Birth`);
    }
};

// thsi function is for when user click on submit button
submitBtn.addEventListener("click", () => {
    splitUserDOBFunc(userDOB.value);
    submitBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
});

// thsi function is for when user click on reset button
resetBtn.addEventListener("click" , () => {
    resetBtn.classList.add("hide");
    submitBtn.classList.remove("hide");

    cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `If you want to reset all input fields so you have to click on "OK"!`);
    userDOB.value = ``;
});

// this function is on DOB inserting input field
userDOB.addEventListener("input" , () => {
    resetBtn.classList.add("hide");
    submitBtn.classList.remove("hide");
});

// these 2 functions are for giving o inputs a value of "0" when user will try to input in the input field
userAge.addEventListener("input", () => {
    cnvtValInZero(userAge, lifeDays, newPera1 , newPera2 , `You are unable to input any value in the input field!`);
});

lifeDays.addEventListener("input", () => {
    cnvtValInZero(userAge, lifeDays , newPera1 , newPera2 , `You are unable to input any value in the input field!`);
});