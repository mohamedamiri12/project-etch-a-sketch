
// container initialisation in js
let container = document.querySelector("#container")

// create 16*16 div
for (let index = 0; index < 256; index++) {
    let div = document.createElement('div')
    div.setAttribute("class","square")
    div.style.flexBasis = "calc(100% / 16)";

    container.appendChild(div)
}

// function to get random number between 0 and 255 for random colors
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

// change color function
function changeColor(element){
    let a = getRandomNumber()
    let b = getRandomNumber()
    let c = getRandomNumber()
    console.log(a,b,c)
    element.style.backgroundColor = `rgb(${a},${b},${c})`
}

// event listner to the mouse hover
let divs = document.querySelectorAll(".square")
divs.forEach(div => div.addEventListener('mouseover', (e) => changeColor(e.target)))

// button creation
let button = document.createElement("button")
button.textContent = "Reset Grid"

// ask for number of squares function
function getSquaresNumber(){
    // ask user for the grid number of squares x*x
    let squaresNumber;
    do{
        squaresNumber = prompt("Enter the number of squares you want",'')
        if(squaresNumber > 100){
            alert("type a number less than 100")
        }
    } while (squaresNumber > 100)
    
    // delete old grid
    let divs = document.querySelectorAll(".square")
    divs.forEach(div => div.remove())

    // creating the new grid
    for (let index = 0; index < squaresNumber*squaresNumber; index++) {
        let div = document.createElement('div')
        div.setAttribute("class","square")
        div.style.flexBasis = `calc(100% / ${squaresNumber})`;
        container.appendChild(div)
    }

    // event listener for new divs
    let newDivs = document.querySelectorAll(".square")
    newDivs.forEach(div => div.addEventListener('mouseover', (e) => changeColor(e.target)))
}

button.addEventListener("click", getSquaresNumber)



document.body.insertBefore(button,container)