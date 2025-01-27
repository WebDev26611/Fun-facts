let n = 0;

const facts = [
  "The world's smallest mammal is the bumblebee bat, which is only about the size of a bumblebee.",
  "The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis, which is a lung disease caused by inhaling very fine silica dust.",
  "The Great Wall of China is the only human-made structure visible from space.",
  "Bananas are berries, but strawberries are not.",
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "An octopus has three hearts, nine brains, and blue blood.",
  "The shortest war in history lasted just 38 to 45 minutes. It was fought between Britain and Zanzibar on August 27, 1896.",
  "A leap year occurs every 4 years to help synchronize the calendar year with the solar year.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
  "The inventor of the Pringles can is now buried in one.",
  "A cow-bison hybrid is called a beefalo.",
  "Scotland's national animal is the unicorn.",
  "A group of flamingos is called a 'flamboyance'.",
  "The hashtag symbol is technically called an octothorpe.",
  "Mosquitoes are attracted to people who just ate bananas.",
  "A snail can sleep for three years at a time.",
  "The dot over a lowercase 'i' or 'j' is called a tittle.",
  "A duel between three people is actually called a truel.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
  "Humans share 60% of their DNA with bananas.",
  "A group of crows is called a murder.",
  "Octopuses have copper-based blood, which gives it a blue color.",
  "The shortest commercial flight in the world lasts just 57 seconds.",
  "The first computer virus was created in 1983.",
  "The hottest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley, California.",
  "The fear of palindromes is called aibohphobia (but it's unofficial).",
  "A shrimp's heart is located in its head.",
  "Dolphins sleep with one eye open",
  "Polar bear fur is actually transparent and not white.",
  "Banging your head on a wall for an hour straight burns 150 calories.",
  "The toothpaste you add on your toothbrush is called a nurdle.",
  "Your brain is constantly eating itself.",
  "Giraffes are 30 times more likely to get struck by lightning than humans.",
  "A cloud weighs about one million tonnes.",
  "If everyone on Earth gathered and jumped on one place, we would move the earth an eighth of a hydrogen atom.",
  "Animals experience time differently than humans.",
  "All the world's bacteria stacked upon each other would be 10 billion light-years.",
  "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
  "Cats have fewer toes on their back paws.",
  "Click the 'Next Fact' button one more time and it'll go back to the start!"
];

const colors = ["#00FF00", "#FFFF00", "#FFD700", "#FF6347", "#FFA500"
];

function displayFact(index) {
  const factElement = document.getElementById("fact");
  const linkElement = document.querySelector("a");
  const previousButton = document.getElementById("previousButton");

  factElement.style.opacity = 0; // Start fade-out
  setTimeout(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    factElement.textContent = facts[index];
    factElement.style.color = color;
    linkElement.style.color = color; // Update link color
    factElement.style.opacity = 1; // Start fade-in

    if (index === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
  }, 300);
}

function getFunFact() {
  n++;
  if (n >= facts.length) {
    n = 0; // Reset to 0 when reaching the end of the list
  }
  displayFact(n);
}

function getPreviousFact() {
  if (n > 0) {
    n--;
  }
  displayFact(n);
}

window.onload = function() {
  displayFact(n);
};
