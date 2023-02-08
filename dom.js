//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`,
  },

  {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`,
  },

  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`,
  },

  {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
    person: `Sam Levenson`,
  },

  {
    quote: `"Sometimes you gotta be quiet, no matter how you feel."`,
    person: `Oscar Mwangi `,
  },

  {
    quote: `"You get what you work for, not what you wish for."`,
    person: `Oscar Mwangi`,
  },

  {
    quote: `"I'd rather be alone than be surrounded by fake love."`,
    person: `NBA Youngboy`,
  },

  {
    quote: `"Gotta keep my head above water.Gotta make it through."`,
    person: `NBA Youngboy`,
  },

  {
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    person: `Steve Jobs`,
  },

  {
    quote: `"I'm not a goat but I fit the description.I like to pour, so I get the prescription."`,
    person: `Lil baby`,
  },

];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random()*quotes.length)

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})