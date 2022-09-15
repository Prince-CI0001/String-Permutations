
let str = document.getElementById("text");
let string;
let array;
let display = document.getElementsByClassName("display")[0];
function permutation(e) {
    display.innerHTML = "";
    string = str.value;
    if(!string){
        alert("Please Enter Valid string");
        return;
    }
    if(string.length > 8){
        alert("Please Enter string having length <= 8");
        return;
    }
    array = stringPermutations(string);
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    // display.innerHTML = uniqueArray;
    uniqueArray.forEach( (item) =>{
        console.log(item);
        display.innerHTML +=item + " ";
    })
}





const stringPermutations = (str) => {
    if (str.length === 0) return "";
    if (str.length === 1) return str;

    let result = [];
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (let j = 0; j < remainingChars.length; j++) {
            
            result.push(currentChar + stringPermutations(remainingChars)[j]);
        }
    }

    return result;
};


