import "../style.scss";
export const CALCULATOR_ACTIONS = {
  emptyValue: "empty-value",
  plusMinus: "plus-minus",
  percent: "percent",
  results: "results",
};
export const CALCULATOR_CONFIG = [
  [
    { value: "AC", action: CALCULATOR_ACTIONS.emptyValue },
    { value: "+/-", action: CALCULATOR_ACTIONS.plusMinus },
    { value: "%", action: CALCULATOR_ACTIONS.percent },
    { value: "/" },
  ],
  [{ value: "7" }, { value: "8" }, { value: "9" }, { value: "*" }],
  [{ value: "4" }, { value: "5" }, { value: "6" }, { value: "-" }],
  [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "+" }],
  [
    { value: "0", colspan: 2 },
    { value: "." },
    { value: "=", action: CALCULATOR_ACTIONS.results },
  ],
];

const calculatorInputEl = document.getElementById("calculatorInput");
const errorMessage = "Error";

export function calculator() {
  const tableEl = document.getElementById("calculatorBtn");

  CALCULATOR_CONFIG.forEach((itemArr) => {
    const trEl = document.createElement("tr");
    itemArr.forEach((itemObj) => {
      createCalculatorData(itemObj, trEl);
    });
    tableEl.appendChild(trEl);
  });
}

calculator();

function createCalculatorData(itemObj, trEl) {
  if (itemObj.value) {
    const tdEl = document.createElement("td");
    const btnEl = document.createElement("button");
    tdEl.className = "p-2";
    btnEl.className += "btn w-full";
    if (itemObj.class) {
      btnEl.className += ` ${itemObj.class}`;
    }
    if (itemObj.colspan) {
      tdEl.colSpan = itemObj.colspan;
    }
    btnEl.innerHTML = itemObj.value;
    tdEl.appendChild(btnEl);
    trEl.appendChild(tdEl);

    btnEl.addEventListener("click", function () {
      switchCaclButton(itemObj);
    });
  }
}

function switchCaclButton(itemObj) {
  switch (itemObj.action) {
    case CALCULATOR_ACTIONS.emptyValue:
      emptyValue();
      break;
    case CALCULATOR_ACTIONS.plusMinus:
      plusMinus();
      break;
    case CALCULATOR_ACTIONS.results:
      results();
      break;
    case CALCULATOR_ACTIONS.plusMinus:
      plusMinus();
      break;
    case CALCULATOR_ACTIONS.percent:
      percentValue();
      break;
    default:
      simpleNumberAction(itemObj);
      break;
  }
}

function emptyValue() {
  calculatorInputEl.value = "";
}

function results() {
  try {
    calculatorInputEl.value = eval(calculatorInputEl.value);
  } catch {
    calculatorInputEl.value = errorMessage;
  }
}

function percentValue() {
  try {
    calculatorInputEl.value = eval(calculatorInputEl.value) / 100;
  } catch (error) {
    calculatorInputEl.value = errorMessage;
  }
}

function plusMinus() {
  try {
    const value = calculatorInputEl.value;
    if (value !== "" && value !== errorMessage) {
      console.log(eval(value));
      calculatorInputEl.value = -Number(eval(value));
    }
  } catch {
    calculatorInputEl.value = errorMessage;
  }
}

function simpleNumberAction(itemObj) {
  calculatorInputEl.value += itemObj.value;
}
