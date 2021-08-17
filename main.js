var chance = 10;
const chance_value = document.getElementById('chance');
const display =document.getElementById('display');
const button = document.getElementById('generate_btn');
const input_box = document.getElementById('user_input');
const game_over = document.getElementById('game');
const score = document.getElementById('score');


const lowHigh = document.getElementById('low_high');
var number = Math.floor(Math.random() * 20);

chance_value.textContent = `Your chance --: ${chance}`;

button.addEventListener('click' , ()=> {

    if(input_box.value.length  == 0){
        lowHigh.textContent = "not a number"
    }
    else if(chance < 1){
        game_over.textContent = "Game over"
    }
    else{
        if ( input_box.value > number ) {
            lowHigh.textContent = "Too High"
            chance--;
            chance_value.textContent = `Your chance --: ${chance}`;

    
        }
        else if(input_box.value < number){
            lowHigh.textContent = "Too Low"
            chance--;
            chance_value.textContent = `Your chance --: ${chance}`;
    
        }
        else if(input_box.value == number){
            display.textContent = number
            lowHigh.textContent = `You got the number ${number}`
            score.textContent = `You find the number in ${11 - chance} chance  `

        }
    }
    
    


})