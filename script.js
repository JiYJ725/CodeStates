const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // TODO 추가 : if문을 통해 operator를 구분하여 계산
  if (operator === '+') result = parseFloat(n1) + parseFloat(n2);
  if (operator === '-') result = parseFloat(n1) - parseFloat(n2);
  if (operator === '*') result = parseFloat(n1) * parseFloat(n2);
  if (operator === '/') result = parseFloat(n1) / parseFloat(n2);
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      // TODO 추가 : 삼항 연산자를 통해 첫번째가 0이면 firstOperend에 숫자 넣기, 0이 아니면 secondOperend에 숫자 넣기.
      firstOperend.textContent == '0' ? firstOperend.textContent = buttonContent : secondOperend.textContent = buttonContent;
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      // TODO 추가 : operator를 눌렀을 때, operator html에 반영
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      // TODO 추가 : 초기화 시 0 + 0 = 0을 각각 html에 반영
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      // TODO 추가 : enter입력 시 calculate를 호출하여 return값을 calculatedResult html에 반영
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum, operatorTarget; // operatorTarget: operator엘레먼트
let decimalFlag = false;
let preOperater;
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      operatorTarget !== undefined ? operatorTarget.style = 'background-color: #313132;' : null;
      // display가 0일 경우, 이전에 operator또는 calculate를 입력한 상태면 입력한 숫자로 변경. 그렇지 않을 경우 숫자 이어 붙이기.
      display.textContent == '0' || previousKey === 'operator' || previousKey === 'calculate'
        ? display.textContent = buttonContent : display.textContent += buttonContent;
      previousKey = 'button';
    }
    if (action === 'operator') {
      operatorTarget = target; // 넘버를 눌렀을 때 해당하는 엘리먼트의 css를 변경하기 위해 엘리먼트 정보 할당
      operatorForAdvanced = buttonContent;
      target.style = 'background-color: #43ed9d;' // 누른 버튼의 css변경
      if (previousKey === 'operator' || previousKey === 'calculate') { firstNum = Number(display.textContent); } // 첫번째 숫자 할당
      else {
        if (firstNum) {
          display.textContent = calculate(firstNum, preOperater, display.textContent);
          console.log(preOperater);
          firstNum = Number(display.textContent);
        }
        else {
          firstNum = Number(display.textContent); // 첫번째 숫자 할당
        }
      }
      preOperater = operator.textContent;
      decimalFlag = false;
      previousKey = 'operator';
    }
    if (action === 'decimal') {
      if (decimalFlag === true) null;
      else if (previousKey === 'operator') display.textContent = '0' + buttonContent;
      else display.textContent += buttonContent;
      decimalFlag = true;
      previousKey = 'decimal';
    }
    if (action === 'clear') {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = '0';
      decimalFlag = false;
      previousKey = 'clear';
    }
    if (action === 'calculate') {
      if (!operatorForAdvanced) { }
      else if (previousKey === 'calculate' && (operator.textContent === '-' || operator.textContent === '/')) {
        display.textContent = calculate(Number(display.textContent), operator.textContent, previousNum);
        decimalFlag = false;
        previousKey = 'calculate';
      }
      else {
        previousNum = Number(display.textContent);
        display.textContent = calculate(firstNum, operator.textContent, previousNum);
        decimalFlag = false;
        previousKey = 'calculate';
      }
    }
  }

});
