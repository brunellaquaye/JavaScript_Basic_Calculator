const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%","*","/","-","+","="];
let output = "";


const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        //this will change the % to .100
        output = eval(output.replace("%","/100"));
        //else if the AC button is pressed the output should be nothing
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue === "DEL") {
        //if the DEL button is clicked, we should convert what is there into a string and remove the last character.
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}
//Add an event listener to buttons, call calculate() on click
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
