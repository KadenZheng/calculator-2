import { evaluate } from "./services/evaluation.js";

let store = [];
let firstInput = "";
let secondInput = "";
let first_operator = null;
let second_operator = null;

document.addEventListener("DOMContentLoaded", () => {
    const screen_text = document.querySelector("#screen-text");
    const numbers = document.querySelector(".numbers");
    const num_buttons = document.querySelectorAll(".numbers button");
    const operators = document.querySelectorAll(".operators button, #modulus");
    const negative = document.querySelector("#negative");
    const clear_button = document.querySelector("#clear");

    clear_button.addEventListener("click", () => {
        screen_text.innerHTML = "0";
        firstInput = "";
        secondInput = "";
        first_operator = null;
        second_operator = null;
    });

    num_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (first_operator === null) {
                firstInput += button.id;
            } else if (first_operator !== null && second_operator === null) {
                secondInput += button.id;
            } else {
                secondInput += button.id;
            }
            console.log("First Input:", firstInput);
            console.log("Second Input:", secondInput);
        });
    });

    operators.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id !== "equal") {
                if (first_operator === null) {
                    first_operator = button.id;
                } else if (first_operator !== null && second_operator === null) {
                    const result = evaluate(firstInput, secondInput, first_operator);
                    screen_text.innerHTML = result;
                    firstInput = result;
                    secondInput = "";
                    first_operator = second_operator;
                    second_operator = null;
                } else {
                }
            } else {
                const result = evaluate(firstInput, secondInput, first_operator);
                screen_text.innerHTML = result;
                firstInput = result;
                secondInput = "";
                first_operator = second_operator;
                second_operator = null;
            }
        });
    });
});
