let lines = [
  'This is a test yes IT IS, a very splendid test indeed.',
  'if you would like to take this test, please reach out to me.',
  'Incredible, the man said, when can I take this HERE TEST say YOU me?',
  'Oh sir, please come to thee and take this here test indeed!',
  'This is the final test, the final countdown, so please sir, take the damn test already.',
];

//  (/[.,?!]/g, '')

function concordance(data) {
  const results = {};

  data.forEach((line, index) => {
    let words = line.toLowerCase().split(/[\s.,?!';]/g);
    words = words.filter((e) => e);
    console.log(words);

    words.forEach((word) => {
     if (results[word]) {
        if (!results[word].includes(index)) {
          results[word].push(index);
       } 
      } else {
        results[word] = [index];
      }
    });

  });
  console.log(results);
  return results;
}

concordance(lines);