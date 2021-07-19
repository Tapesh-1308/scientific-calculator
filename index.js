let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let advance = document.querySelector('.advance');
let simple = document.querySelector('.simple');

let screenValue = "";

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

for (item of button) {
    item.addEventListener('click', (event) => {
        let buttonText = event.target.innerText;
        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "c") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "sin") {
            screen.value = Math.sin(toRadians(screenValue));
        }

        else if (buttonText == "cos") {
            screen.value = Math.cos(toRadians(screenValue));

        }
        else if (buttonText == "tan") {
            screen.value = Math.tan(toRadians(screenValue));
        }
        else if (buttonText == "log") {
            screen.value = Math.log10(screenValue);
        }
        else if (buttonText == "√") {
            screen.value = Math.sqrt(screenValue);
        }
        else if (buttonText == "x!") {
            if (screen.value < 0) {
                screen.value = "Error";
            }
            else if (screen.value === 0) {
                screen.value = 1;
            }
            else {
                let factorial = 1;
                for (i = 1; i <= screen.value; i++) {
                    factorial *= i;
                }
                screen.value = factorial;
            }
        }
        else if (buttonText == "x^") {
            screen.value = Math.pow(screenValue, 2)
        }
        else if (buttonText == "1/x") {
            screen.value = 1/screenValue
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

const slide = () => {
    advance.style.left = '2%';
    simple.style.left = '100%';
}

const slideBack = () => {
    advance.style.left = '-100%';
    simple.style.left = '2%';
}