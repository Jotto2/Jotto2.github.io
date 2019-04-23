let allQuotes = ["People are like plants; we all lean toward the light.", "You gotta water your plants. Nobody can water them for you.", "Plant and your spouse plants with you; weed and you weed alone.", "Plants are not like us, and the more you study plants, the more different and deep ways you see that they are not like us.", "Organisms don't think of CO2 as a poison. Plants and organisms that make shells, coral, think of it as a building block.", "I am a gardener, I have a big green thumb, and I can take care of these plants really easily because they are all fake."];

i = 0;
setInterval(nextQuote, 5000);
headerQuotes.innerHTML = `"${allQuotes[0]}" - `
// Funksjonen for quotes
function nextQuote(){
  headerQuotes.innerHTML = `"${allQuotes[i]}" - `;
  i += 1;
  if(i == allQuotes.length){i = 0;};
}
