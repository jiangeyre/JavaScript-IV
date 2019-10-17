/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

class GameObject {
    constructor(attr){
        this.createdAt = attr.createdAt,
        this.name = attr.name,
        this.dimensions = attr.dimensions
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}
class CharacterStats extends GameObject {
    constructor(charAttr){
        super(charAttr);
        this.healthPoints = charAttr.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}
class Humanoid extends CharacterStats {
    constructor(humanoidAttr){
        super(humanoidAttr);
        this.team = humanoidAttr.team;
        this.weapons = humanoidAttr.weapons;
        this.language = humanoidAttr.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
class Villain extends Humanoid{
    constructor(villainAttr){
        super(villainAttr);
        this.attackDmg = villainAttr.attackDmg;
        this.healthRegen = villainAttr.healthRegen;
    }
    attackHero(){
        let dmgTakenFromHero = 3;
        this.healthPoints = this.healthPoints - dmgTakenFromHero;
        while (this.healthPoints > 0){
          let remainingHealth = this.healthPoints - dmgTakenFromHero;
          return `${this.name} has taken damage and has ` + remainingHealth + " health left.";
        }
        if (this.healthPoints === 0){
          return `${this.name} is deceased. His soul has been devoured and taken to Satan.`;
        }
        return this.healthPoints;
    }
}
class Hero extends Humanoid{
    constructor(heroAttr){
        super(heroAttr);
        this.attackDmg = heroAttr.attackDmg;
        this.healthRegen = heroAttr.healthRegen;
    }
    attackVillain(){
        let dmgTakenFromVillain = 2;
        this.healthPoints = this.healthPoints - dmgTakenFromVillain;
        while ( this.healthPoints > 0 ) {
          let remainingHealth = this.healthPoints - dmgTakenFromVillain;
          return `${this.name} has taken damage and has ` + remainingHealth + " health left.";
        }
        if ( this.healthPoints === 0 ){
          return `${this.name} is dead. Our hero is dead. *plaintive cries* May his soul reach the heavens.`;
        } 
        return this.healthPoints;
    }
}

  const sauron = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 15,
    name: 'Sauron - The Necromancer',
    team: 'Mage Guild',
    weapons: [
      'One Ring', ' Maia', ' Dark Sorcery', ' Mace'
    ],
    language: 'All Languages',
  })
  
  const thranduil = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 16,
    name: 'Thranduil',
    team: 'Mirkwood',
    weapons: [
      'Sword',
      ' Giant Cape', ' Son - Legolas'
    ],
    language: 'Elvish',
  })
  
  console.log(thranduil.name + " has these weapons: " + thranduil.weapons + ".");
  console.log(sauron.name + " has these weapons: " + sauron.weapons + ".");
  console.log(thranduil.attackVillain());
  console.log(sauron.attackHero());
  console.log(thranduil.attackVillain());
  console.log(sauron.attackHero());
  console.log(thranduil.attackVillain());
  console.log(sauron.attackHero());
  console.log(thranduil.attackVillain());
  console.log(sauron.attackHero());
  console.log(thranduil.attackVillain());
  console.log(sauron.attackHero());

  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.