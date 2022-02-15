const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const personalDetails = {};

rl.question("What's your name? Nicknames are also acceptable! ", (answer) => {
  console.log(`Thank you for your valuable feedback, ${answer}`);
  personalDetails.name = answer; 
  
  rl.question("What is your favourite meal of the day? ", (answer) => {
    console.log(`No way! ${answer} is my favourite meal too!`);  
    personalDetails.fav_meal = answer;
    
    rl.question("What's the best thing to eat at that meal?", (answer) => {
      console.log(`Yum, ${answer} sounds delicious!`);
      personalDetails.fav_food = answer;
      
      rl.question("What is something you love doing in your free time? ", (answer) => {
        console.log(`${answer} is something I just can't get into.`);
        personalDetails.pastime = answer;
        
        rl.question("Do you have any specific music you listen to while you do that? ", (answer) => {
          console.log(`Hmmm, I've never heard of ${answer}`);
          personalDetails.music = answer; 
          
          rl.question("Where would you go if you could go on vacation for a month? ", (answer) => {
            console.log(`${answer}, is amazingg, I totally agree!`);
            personalDetails.vacation_spot = answer;
            
            rl.question("What is your secret superpower? ", (answer) => {
              console.log(`No way! I can't wati to see that`);
              
              personalDetails.super_power = answer;
              rl.close();

              console.log(`${personalDetails.name} loves listening to ${personalDetails.music} while ${personalDetails.pastime}, devouring ${personalDetails.fav_food} for ${personalDetails.fav_meal}, prefers ${personalDetails.vacation_spot} over any other vacation spot, and is amazing at ${personalDetails.super_power}`);
            });
          });
        });
      });
    });
  });
});

