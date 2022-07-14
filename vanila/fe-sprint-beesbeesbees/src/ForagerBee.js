// ForagerBee class functionality
// 6) `age` 속성은 `10`이어야 합니다
// 7) `job` 속성은 `find pollen`이어야 합니다
// 8) `color` 속성은 `Bee`로부터 상속받습니다
// 9) `food` 속성은 `Grub`으로부터 상속받습니다
// 10) `eat` 메소드는 `Grub`으로부터 상속받습니다
// 11) `canFly` 속성은 `true`이어야 합니다
// 12) `treasureChest` 속성은 빈 배열 `[]`이어야 합니다
// 13) `forage` 메소드를 통해 `treasureChest` 속성에 보물을 추가할 수 있어야 합니다
const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(보물) {
    this.treasureChest.push(보물);
  }
}

module.exports = ForagerBee;
