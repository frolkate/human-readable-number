module.exports = function toReadable (number) {

    function toReadable (number) {

        let wordsNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        
        let remainderDivision_100 = number % 100;
          console.log(remainderDivision_100);
        let hundredNumber = number - remainderDivision_100; 
          console.log (hundredNumber);
        let simpleNumber  = remainderDivision_100 % 10;
          console.log(simpleNumber);
        let tenNumber =  remainderDivision_100 - simpleNumber;
          console.log(tenNumber);
        let isHundred = false;
          let isTen = false;
          let isSimple =  false;
        
        let stringNumber = '';
        
        for (i = 0; i < wordsNumber.length; i ++)
        {
            if (hundredNumber / 100 === i &&  i != 0 && isHundred === false) {
              isHundred = true;
              stringNumber += `${wordsNumber[i - 1]} hundred `;
            }
        }
          for (i = 0; i < wordsNumber.length; i ++)
        {
            if (tenNumber / 10 === i && i != 0 && isTen === false) {
              isTen = true;
              if (i=== 1 && simpleNumber === 1) {
                isSimple = true;
                stringNumber+= "eleven";
              }
                     if (i=== 1 && simpleNumber === 2) {
                isSimple = true;
                stringNumber+= "twelve";
              }
                          if (i=== 1 && simpleNumber > 2) {
                 isSimple = true;
                 stringNumber +=  `${wordsNumber[simpleNumber - 1]}teen `;
              }
              else{
              stringNumber +=  `${wordsNumber[i - 1]}ty `;
            }
            }
        }
          for (i = 0; i < wordsNumber.length; i ++)
        {
            if (simpleNumber === i && i != 0 && isSimple === false) {
              stringNumber +=  `${wordsNumber[i - 1]}`;
            }
        }
        return stringNumber;
        
}
}