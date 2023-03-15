function registerHeroes(input) {
  let data = [];
  for (let i = 0; i < input.length; i++) {
    let heroData = input[i].split(" / ");
    let heroName = heroData[0];
    let heroLevel = heroData[1];
    let heroItems = [];
     if (heroData.length > 2) {
      heroItems = heroData[2].split(", ");
     }
     data.push({ heroName, heroLevel, heroItems });
  }

  data.sort((heroA, heroB) => heroA.heroLevel - heroB.heroLevel);

  for (let i = 0; i < data.length; i++) {
    console.log(`Hero: ${data[i].heroName}`);
    console.log(`level => ${data[i].heroLevel}`);
    if (data[i].heroItems) {
      console.log(`items => ${data[i].heroItems.join(", ")}`);
    }
  }
}


registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

console.log("\n");

registerHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
);

// Task description
// 
// Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// 
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}
