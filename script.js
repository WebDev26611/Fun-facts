const facts = [
    "Did you know that the population of the earth is about 8 billion people?",
    "The world's smallest mammal is the bumblebee bat, which is only about the size of a bumblebee.",
    "The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis, which is a lung disease caused by inhaling very fine silica dust.",
    "The Great Wall of China is visible from space.",
    "Bananas are berries, but strawberries are not.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "An octopus has three hearts, nine brains, and blue blood.",
    "The shortest war in history lasted just 38 to 45 minutes. It was fought between Britain and Zanzibar on August 27, 1896.",
    "A leap year occurs every 4 years to help synchronize the calendar year with the solar year.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Cats have fewer toes on their back paws.",
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
    "The hottest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley, California."
];

let currentFactIndex = 0;

function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    document.getElementById("fact").textContent = facts[currentFactIndex];
}

window.onload = function() {
    nextFact();
};
