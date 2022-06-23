module.exports = function toReadable (number) {
  let wordsNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let exeptNumber = ["", "twen", "thir", "for", "fif", "", "","eigh"];
  
  let remainderDivision_100 = number % 100;
  let hundredNumber = number - remainderDivision_100; 
  let simpleNumber  = remainderDivision_100 % 10;
  let tenNumber =  (remainderDivision_100 - simpleNumber) / 10;

  let isHundred = false;
  let isTen = false;
  let isSimple =  false;
  
  let stringNumber = "";

  if (simpleNumber === 0 && tenNumber === 0 && hundredNumber === 0) stringNumber+= "zero";

  if(hundredNumber != 0)
  {
    for (i = 0; i < wordsNumber.length; i ++)
    {
      if (hundredNumber / 100 === i &&  i != 0 && isHundred === false) {
        isHundred = true;
        stringNumber += `${wordsNumber[i - 1]} hundred `;
      }
    }
  }

    for (i = 0; i < wordsNumber.length; i ++)
  {
      
      if (tenNumber === i && i != 0 && isTen === false) {
        
          isTen = true;
        
          if (tenNumber === 2 || tenNumber === 3 || tenNumber === 4 || tenNumber === 5 || i===8)  
          stringNumber +=  `${exeptNumber[i - 1]}ty `;
            
         if (tenNumber === 6 || tenNumber === 7 || tenNumber === 9)  
        
        stringNumber +=  `${wordsNumber[i - 1]}ty `;
        
        if (i=== 1 && simpleNumber === 0) {
          isSimple = true;
          stringNumber+= "ten";
        }

        if (i=== 1 && simpleNumber === 1) {
          isSimple = true;
          stringNumber+= "eleven";
        }
        
        if (i=== 1 && simpleNumber === 2) {
          isSimple = true;
          stringNumber+= "twelve";
        }
        else { 
           
        if (tenNumber=== 1 && simpleNumber != 0)
        {
        if ( simpleNumber === 3 || simpleNumber === 5 || simpleNumber===8){                 isSimple = true;
            stringNumber +=  `${exeptNumber[simpleNumber - 1]}teen`;
        }
        if ( simpleNumber === 4 || simpleNumber === 6 || simpleNumber===7 || simpleNumber===9)
        {
           isSimple = true;
           stringNumber +=  `${wordsNumber[simpleNumber - 1]}teen`;
        }
        }
      }
  }
  }
    for (i = 0; i < wordsNumber.length; i ++)
  {
      if (simpleNumber === i && i != 0 && isSimple === false) {
        stringNumber +=`${wordsNumber[i - 1]}`;
      }
  }

  if (stringNumber [stringNumber.length - 1] === " ") stringNumber = stringNumber.slice(0, -1);
  return stringNumber;     
}
