const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = {};

tutorials.map((title) => {
  let words = title.split(' ');
  let newTitle = '';
  const newWords = words.map((word) => {
    return capWord = word.charAt(0).toUpperCase() + word.slice(1);
  })
  for (const newWord of newWords) {
    newTitle = newTitle + ` ${newWord}`;
  }
  return newTitle
  
});

console.log(titleCased);