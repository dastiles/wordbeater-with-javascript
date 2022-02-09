const timeTag = document.querySelector('#time')
const wordTag = document.querySelector('#word')
const inputTag = document.querySelector("#input")
const scoreTag = document.querySelector("#score")
const highTag = document.querySelector("#hscore")

let word;
let score = 0;
let time = 10;
let highscore = localStorage.getItem('score');


const words = [
    'confidence',
    'laptop',
    'javascript',
    'useless',
    'something',
    'zimbabwe',
    'car'
]



const wordGenerator = () => {  
    let index = Math.floor(Math.random() * words.length)
    return words[index]
}

const start = () => {
    scoreTag.innerText = score
    highTag.innerText = localStorage.getItem('score') != null ? localStorage.getItem('score') : 0
     word = wordGenerator();
        wordTag.innerText =word
        inputTag.value = ''
        time = 10
}

start()

setInterval(() => {
    console.log(time)
    time -= 1
    timeTag.innerText = time
    if (time <= 0) {
        gameOver();
    }
}, 1000)

inputTag.addEventListener('input', (change) => {  
    game()
     })

const game = () => {
    wordTag.innerText =word
    let input = inputTag.value 
    if (input === word) {
        score += 100
       start()       
    }
}
//game()

const gameOver = () => {
    
   
    if (score > parseInt(highscore)){
        localStorage.setItem('score', score.toString())
    }

    console.log(highscore)
    
   // parseInt(highscore)
    score -= 10
     start()      
}