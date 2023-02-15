const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];
rl.question("What's your name? Nicknames are also acceptable :)" + "\n", (userInput) => {
  console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
  answers.push(userInput.trim());
  rl.setPrompt(
    rl.question("What's an activity you like doing?" + "\n", (userInput) => {
      console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
      answers.push(userInput.trim());
      rl.setPrompt(
        rl.question("What do you listen to while doing that?" + "\n", (userInput) => {
          console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
            answers.push(userInput.trim());
          rl.setPrompt(
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)" + "\n", (userInput) => {
              console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
                answers.push(userInput.trim());
              rl.setPrompt(
                rl.question("What's your favourite thing to eat for that meal?" + "\n", (userInput) => {
                  console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
                    answers.push(userInput.trim());
                  rl.setPrompt(
                    rl.question("Which sport is your absolute favourite?" + "\n", (userInput) => {
                      console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
                        answers.push(userInput.trim());
                      rl.setPrompt(
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at!" + "\n", (userInput) => {
                          console.log(`Thank you for your valuable feedback: ${userInput.trim()}`);
                            answers.push(userInput.trim());
                          rl.close();
                        })
                      ); 
                    })
                  ); 
                })
              ); 
            })
          ); 
        })
      ); 
    })
  ); 
});


rl.on('close', () => {
  console.log(`Most of my firends call me ${answers[0]}. Most of the time you'll find me ${answers[1]}, while listening to ${answers[2]}. During the day I cannot go without ${answers[3]}, I always have to eat ${answers[4]} or consider the meal incomplete. Also I am a huge ${answers[5]} fanatic. And my superpower is ${answers[6]}`);
});