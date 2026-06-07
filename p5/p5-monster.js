module.exports = class Monster {
    constructor({
        monsterName = 'Unknown',
        minimumLife = 0,
        currentLife = 100,
    } = {}) {
        this.name = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife;
    }
  
    // Update Life
    updateLife = (health) => {
        this.currentLife = Math.max(this.currentLife + health, 0)
        this.isAlive = this.currentLife >= this.minimumLife;
    };

    // Randomly Drain Life
    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        if (minimumLifeDrain > maximumLifeDrain) {
            throw new Error('Minimum life drain must be less than maximum life drain');
        }
        const lifeDrainAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
        this.updateLife(-lifeDrainAmount);
        console.log(`${this.name} drained ${lifeDrainAmount} life.`);

    };

    
  };

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}