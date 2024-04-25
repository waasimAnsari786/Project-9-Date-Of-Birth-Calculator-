let userDOB = document.querySelector("#user-DOB");
let lifeDays = document.querySelector("#life-days");
let userAge = document.querySelector("#user-age");
let submitBtn = document.querySelector("#submit-btn");

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

const splitUserDOBFunc = (element) => {
    let splitUserDOB = element.split(" ");
    // userAge.value = year - splitUserDOB[2];
    // lifeDays.value = userAge.value * 365;
    
    if (splitUserDOB[0] >= date && splitUserDOB[1] >= month && splitUserDOB[2] <= year){
        console.log(`ok`);
    }

    else{
        alert(`please enter a valid value`)
    }
};

submitBtn.addEventListener("click" , () => {
    splitUserDOBFunc(userDOB.value);
});