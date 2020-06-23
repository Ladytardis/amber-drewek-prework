
var wordList = [='EWOK', 'MANDALORIAN', 'REY', 'LUKE', 'REX', 'VADER', 
    'FIVES', 'ASOKA', 'ANIKAN', 'BLASTER', 'SKYWALKER', 'GUNGAN', 'WOOKEE', 'KASHYYYK', 'NABOO', 'CLANKERS',
'ENDOR', 'HOTH', 'PHASMA', 'KENOBI', 'FINN', 'SOLO', 'TATTOINE', 'SCARIF', 'PORG', 'TYRANUS', 'SIDIOUS', 'LIGHTSABER'
]

var word = wordList[Math.floor(math.random()*(wordList.length-1))+1]

for (var i=0; i < word.length; i++) {
    answerArray[i]='_';
}

var lettersLeft = word.length


