// Bee class functionality
// 1) `age` 속성은 `5`이어야 합니다
// 2) `color` 속성은 `yellow`이어야 합니다
// 3) `food` 속성은 Grub으로부터 상속받습니다
// 4) `eat` 메소드는 Grub으로부터 상속받습니다
// 5) `job` 속성은 `Keep on growing`이어야 합니다
const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;
