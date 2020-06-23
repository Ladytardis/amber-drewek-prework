

// words to pick from
var wordList = ['EWOK', 'MANDALORIAN', 'REY', 'LUKE', 'REX', 'VADER', 
    'FIVES', 'ASOKA', 'ANIKAN', 'BLASTER', 'SKYWALKER', 'GUNGAN', 'WOOKEE', 'KASHYYYK', 'NABOO', 'CLANKERS',
'ENDOR', 'HOTH', 'PHASMA', 'KENOBI', 'FINN', 'SOLO', 'TATTOINE', 'SCARIF', 'PORG', 'TYRANUS', 'SIDIOUS', 'LIGHTSABER'
]
// pick word
var word = wordList[Math.floor(math.random()*(wordList.length-1))+1]

//s

for (var i=0; i < word.length; i++) {
    answerArray[i]='_';
}

var lettersLeft = word.length
guesses=0
guessesLeft=(7-guesses)
lettersUsed =[]

while (lettersLeft > 0) && (guessesLeft > 0){

const myFunction = function (guess) {
    console.log(event.key);
    if (keyup === word){answerArray[i]=keyup
    }
    else {guesses++;
         lettersUsed.push('keyup')
    }
}

document.addEventListener('keyup', myFunction)

//New Idea
