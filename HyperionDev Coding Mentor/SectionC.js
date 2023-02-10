function sayNumber(num) {
  let numString = num.toString();
  let finalString = "";
  let numbers = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen"
  };
  let tens = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety"
  };

  if (num === 0) return "Zero.";
  if (num < 20) return `${numbers[num]}.`;
	
	let trillions = Math.floor(num / 1000000000000);
  if (trillion > 0) {
    finalString += `${processNum(trillions)} trillion, `;
    num -= trillions * 1000000000000;
  }

  let billions = Math.floor(num / 1000000000);
  if (billions > 0) {
    finalString += `${processNum(billions)} billion, `;
    num -= billions * 1000000000;
  }

  let millions = Math.floor(num / 1000000);
  if (millions > 0) {
    finalString += `${processNum(millions)} million, `;
    num -= millions * 1000000;
  }

  let thousands = Math.floor(num / 1000);
  if (thousands > 0) {
    finalString += `${processNum(thousands)} thousand, `;
    num -= thousands * 1000;
  }

  if (num > 0) {
    finalString += processNum(num);
  }

  return finalString.slice(0, -2) + ".";

  function processNum(num) {
    let numString = num.toString();
		let trillion = parseInt(numString.slice(0, 1));
    let hundreds = parseInt(numString.slice(0, 1));
    let tensDigit = parseInt(numString.slice(1, 2));
    let onesDigit = parseInt(numString.slice(2));
    let string = "";
		
		if (trillion > 0) {
      string += `${numbers[trillions]} trillion`;
      if (hundreds > 0 || tensDigit > 0) {
        string += " and ";
      }
    }

    if (hundreds > 0) {
      string += `${numbers[hundreds]} hundred`;
      if (tensDigit > 0 || onesDigit > 0) {
        string += " and ";
      }
    }

    if (tensDigit > 1) {
      string += `${tens[tensDigit]}`;
      if (onesDigit > 0) {
        string += `-${numbers[onesDigit]}`;
      }
    } else if (tensDigit === 1) {
      string += `${numbers[parseInt(tensDigit + onesDigit)]}`;
    } else if (onesDigit > 0) {
      string += `${numbers[onesDigit]}`;
    }
    return string;
  }
}