let display = document.getElementById('display');
let numsbtn = document.getElementById('btnnums');
let numr = document.getElementById('btnnums1')
let input = document.getElementById('')
let displayedAnswer = false;
// add an event listener for the click event to the div containing all the buttons
numsbtn.addEventListener('click', (e)=>{
    // check if the target element has a className of 'display3'
    if(e.target.classList.contains("display3")){
        // append the value of the element to the inner html of the display element
        display.innerHTML += e.target.innerHTML
    }
    // evaluation of numbers to bring out the correct results
    if (e.target.id== 'equls'){
        // bringing out the corrects answers for  the values 
        try {
            let result = eval(display.innerHTML)
            display.innerHTML = result
            displayedAnswer = true;
           // detecting errors in the bdisplay screen 
        } catch (error) {
            display.innerHTML= "MATH ERROR"
        }
    }
    // clear all values
    if(e.target.id=='clear'){
        display.innerHTML =  ""
    }
    // deleate one one number from the values
    if(e.target.id=='delete' && !displayedAnswer){
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1)
    }

})
numr.addEventListener('click', (e)=>{
    if(e.target.classList.contains("display3")){
        display.innerHTML += e.target.innerHTML
    }
    if (e.target.id=='equls'){
        try{
            console.log(display.innerHTML)
            let result = Math.LOG2E(display.innerHTML)
            display.innerHTML = result
            displayedAnswer =true;
        }
        catch(error){
            display.innerHTML="MATH ERROR"
        }
    }
})