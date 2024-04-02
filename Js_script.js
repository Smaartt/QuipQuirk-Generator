function clearAll() {
    const meme = document.querySelector(".meme-content");
    const joke = document.querySelector(".joke-content");
    const quote = document.querySelector(".quote-content");
    const riddle = document.querySelector(".riddle-content");
  
    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";
  }
  
  function showMeme() {
    // Value should be a string representing image URL
    const randomMemeUrl = getRandomData("memes");
  
    const memeContainer = document.querySelector(".meme-content");
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", randomMemeUrl);
  
    clearAll();
  
    // Add the new img to the document
    memeContainer.appendChild(newMeme);
  }
  
  function showJoke() {
    // Value should be a string representing the joke
    const randomJokeText = getRandomData("jokes");
  
    const jokeContainer = document.querySelector(".joke-content");
    const newJoke = document.createElement("p");
    newJoke.textContent = randomJokeText;
  
    clearAll();
  
    // Add the new img to the document
    jokeContainer.appendChild(newJoke);
  }
  
  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData("quotes");
  
    const quoteContainer = document.querySelector(".quote-content");
  
    const newQuoteText = document.createElement("p");
    const newQuoteAuthor = document.createElement("p");
    newQuoteText.textContent = randomQuote.quote;
    newQuoteAuthor.textContent = "- " + randomQuote.author;
  
    clearAll();
  
    quoteContainer.appendChild(newQuoteText);
    quoteContainer.appendChild(newQuoteAuthor);
  }
  
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData("riddles");
  
    const riddleContainer = document.querySelector(".riddle-content");
  
    const newRiddleText = document.createElement("p");
    const newRiddleAnswer = document.createElement("p");
  
    newRiddleText.textContent = randomRiddle.question;
    newRiddleAnswer.textContent = "- " + randomRiddle.answer;
    newRiddleAnswer.setAttribute("id", "riddle-answer");
  
    clearAll();
  
    newRiddleAnswer.hidden = true;
  
    riddleContainer.appendChild(newRiddleText);
    riddleContainer.appendChild(newRiddleAnswer);
  }
  
  function revealAnswers() {
    const riddleContent = document.querySelector(".riddle-content");
    const riddle = riddleContent.querySelector("p");
    const riddleAnswer = document.querySelector("#riddle-answer");
  
    if (riddle && riddleAnswer.hidden) {
      riddleAnswer.hidden = false;
    } else if (riddle && riddleAnswer) {
      alert("The riddle answer is already exposed!");
    } else {
      alert("There is no riddle to show the answer for!");
    }
  }
  
  /**
   * This function is used to get random data
   * Valid arguments:
   *
   * 'memes', 'jokes', 'quotes', 'riddles'
   *
   * Return values:
   *
   * For meme data:
   * A string representing an image url
   *
   * For joke data:
   * A string representing the joke
   *
   * For quote data:
   * An object - { quote: '', author: '' }
   *
   * For riddle data:
   * An object - { question: '', answer: '' }
   *
   * Example usage: getRandomData('quotes');
   */
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  // ----------------------------------------------------
  // IGNORE EVERYTHING BELOW - Used for random data
  // ----------------------------------------------------
  
  // Everything below is pre-generated so that you don't have to go find your own memes, jokes, quotes, and math problems.
  // -----------------------------------------------
  
  // Source:https://www.cometchat.com/blog/programming-memes-for-developers
  const memes = [
    "./my_memes/60d33be9e145cb9e6c28fa8f_2xb2f2VxehbkWOhOVqOghOYg4ifSVtTDD4XTatQRAUeVQJZidqxyydLvkwASiplALthYScZlW13PNFsd66-DV719GoSyzFQ-d6VsdoDNn44IAXGtu8xQV4W1mmhp9SBmd9A0dO2L.png",
    "./my_memes/60d33beaa2121c403e729f3e_cFdC0T4-nFznndnWBG6Dx4sbRY_jGLBvCSq6BM_uXkJ_n3nL4pKSC_RPSlnAbDYDw0U_BNjM_mftxXGf0dwoRTp1vB5HWk1TJR6U-69iJLAugpxpnzRgXpxfI4Tr1talrjrJg0AP.png",
    "./my_memes/60d33beaf630caf8b8625819_ojVfiY9N9W7SNblUwsMuRdEHfZaK7gTn4I8oA596jsQz0gHhJ0msEceYVq2C5afZ4rDCvhqx1EEedzTz664Vi3aDScXL2jnzV_uuWriJbW-wldzhpJDT-TNOPvgusibLRCqaY5pJ.png",
    "./my_memes/60d33bf00f8de3388923e46e_pWDSAyLl1anr-yCxObb-b-MUilkQM0K2eER4_gwbN48qaP3NB4ZPl_P5C7CwKEQvC1fsQvHTsWd7yCMLixJ9v8rweKd9pBYGg6AVx67kohYbSpQiVIUz3svyG1s58XeqM7cKnq3x.png",
    "./my_memes/60d368179f2f6f8d2c071b39_gif2-min.gif",
    "./my_memes/60d33bf145999a2dea3f5534_tn-ZHrDula1DCJ0Xf23kkcTcRfdYAfiYUS6bPmkt6L6F0PXh0pxLIRKKJEGHgkL4QjpDrEQWx1YqYb5UOtkakedB3M9L5URk1Zz5zfTfS5OnUzp7d_njiaKQkl2tFuCh4SfwaaPn.png",
    "./my_memes/60d33bf456d81ff850d41d2e_91ZWM5Ez2aBXw3zcOIgPLP7XnuFW_exwhPzdToPa_AsEcV0Pw837S_kUbYpfpCUAZCLUSZ0_rdV_dUaZRLyz-wOKOMyEi7IaVDvU-tzmpbaUDKY9TNY5GexvJ9ei2R-LTqpfaaQD.png",
    "./my_memes/60d33bf45ccef72a83a30822_1RQn8ZpWk8JFIHiBCjSGNTBsSxHG3KMnU54Qf8khHOJwBmwOZMt5Q5uhLa-pwhVPrhQJwe3NS_gkWCpLFCPxFZdfUQCghZJIFLcZwvGMq3BYauR7RDf0xRmLqT9i4VXoTtBZNS5y.png",
    "./my_memes/60d33bf4fa7b530b77f3bbe0_6GnQQXGutBkLu762PaVF-Tyy8GptTL8C3B0g-P7s0umrlPwMLAZ0JFRk7KE4BVXXSDp6gAnnMF93ArAuk2TUtLHrXDgOeT-e1wCbtDwKl6vrypEm1pY74tDuC3Oa7WxUlwh3_hU1.png",
    "./my_memes/60d33bf0ace19ce579e0d56f_1AxPMSDQx9sj4hWAS3MWucfkqhwJLkWOSNN7sNDqiVAOU0I__BdCcP2zNgyYDLXwvBRFlAemDbC61v5kE3KKD0Jf9OcRzxxL-XXR03Jgy62t6nvs2GhsStPt8ZXdmaDMxWTXBPqG.png",
    ];
  
  // Source: https://teachyourkidscode.com/programming-jokes/
  const jokes = [
    "Programming is 10% writing code and 90% understanding why it’s not working",
    "Why did the programmer quit her job? Because she didn’t get arrays",
    "What did the Java Code say to the C code? You’ve got no class",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "99 little bugs in the code, 99 little bugs, you take one down and patch it around, 125 little bugs in the code",
    "Why do Java programmers have to wear glasses? Because they don’t C#",
    "Programmer: An organism that turns coffee into software",
    "Why do programmers take so long in the shower? They read the directions on the shampoo bottle and follow them to the letter: Lather, rinse, and repeat.",
    "A computer programmer rushes his wife to the hospital where she gives birth to their child. The doctor first hands the baby to the programmer. 'Well?' his wife says impatiently. 'Is it a boy, or is it a girl?' Smiling, the programmer replies, 'Yes.'",
    "If at first you don’t succeed, call it version 1.0",
    "My love for you has no bugs",
];
  
  // source: https://techvify-software.com/35-best-coding-programming-quotes/
  const quotes = [
    {
      quote:
        "Coding like poetry should be short and concise.",
      author: "Santosh Kalwar",
    },
    {
      quote:
        "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      quote:
        "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
    },
    {
      quote:
        "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin",
    },
    {
      quote: "Truth can only be found in one place: the code.",
      author: "Robert C. Martin",
    },
    {
      quote:
        "Of course, bad code can be cleaned up. But it’s very expensive",
      author: "Robert C. Martin",
    },
    {
      quote:
        "You've baked a really lovely cake, but then you've used dog shit for frosting.",
      author: "Steve Jobs",
    },
    {
      quote:
        "A language that doesn't affect the way you think about programming is not worth knowing.",
      author: "Alan J. Perlis",
    },
    {
      quote:
        "The most disastrous thing that you can ever learn is your first programming language.",
      author: "Alan Kay",
    },
    {
      quote:
        "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
      author: "Joseph Weizenbaum",
    },
    {
      quote:
        "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
      author: "Brian Kernighan",
    },
    {
      quote:
        "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
      author: "Ram Ray",
    },
  ];
  
  // Source: https://www.rd.com/list/challenging-riddles/
  const riddles = [
    {
      question:
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      answer: "An echo",
    },
    {
      question:
        "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
      answer: "A Candle",
    },
    {
      question:
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
      answer: "A Map",
    },
    {
      question:
        "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
      answer: 'The letter "R"',
    },
    {
      question:
        "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
      answer: "All the people were married",
    },
    {
      question:
        "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
      answer: "Heroine",
    },
  ];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    memes,
    jokes,
    quotes,
    riddles,
  };