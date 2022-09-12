let btnRandom = document.querySelector('button')
let result = document.querySelector('h1')

let jokes = [ 
"Why don't oysters donate to charity? Because they're shellfish.",

"What does a baby computer call its father? Data.",

" What did the custodian say when he jumped out of the closet? Supplies!",

" Why are colds bad criminals? Because they're easy to catch.",

"How does a penguin build its house? Igloos it together.",

"Which knight invented King Arthur's Round Table? Sir Cumference.",

"What do sprinters eat before a race? Nothing. They fast.",

"What do you call a fly without wings? A walk!",

"What happens when you witness a ship wreck? You let it sink in." ]

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}
btnRandom.addEventListener('click,' () => {
    let index = getRandomNumber(0 , jokes.length-1);
    result.innerText = jokes[index];
});