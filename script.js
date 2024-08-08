const repeatLog = function (n, callback) {
    for(let i = 1; i <= n; i++) {
        callback(i)
    }
};

const createMessage =function(optionalMessage = ''){
    const message = 'Iteration number:' + optionalMessage;
    console.log(message);
}

const prettyLogValue = function(optionalMessage = '') {
console.log(` I am pretty message  /t: ${optionalMessage}  `)

}
const pow = function(num = 0){
console.log(2 ** num)
};

repeat(10, crerateIterationMessage);
console.log('------------------------');
repeat(15, prettyLogValue);
console.log('------------------------');

const filter = function(array, test) {
    let resultArray = []
    for (const el of array) {
        const isPassed = test(el); 
   

        if(isPassed)  {
            resultArray.push(el);
        } 
    }
    return resultArray;
};

const filteredNamesWithLegthMoreThanFour = function(value){
    return value.legth > 4;
};

const namesArray = ['Amalia', 'Oleh', 'Oleksander', 'pavlo', 'Nazariy' ];
const numbersArray =[23,49,50,1,34,4];

const filteredNames = filter(namesArray)