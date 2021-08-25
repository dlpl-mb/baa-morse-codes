input.onButtonPressed(Button.A, function () {
    LetterToSend = "" + LetterToSend + "."
    basic.showString(LetterToSend)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(LetterToSend)
    LetterToSend = ""
})
input.onButtonPressed(Button.B, function () {
    LetterToSend = "" + LetterToSend + "-"
    basic.showString(LetterToSend)
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showString("" + (receivedString))
    LetterToSend = ""
})
let LetterToSend = ""
LetterToSend = ""
radio.setGroup(1)
let morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----"
]
let alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
]
