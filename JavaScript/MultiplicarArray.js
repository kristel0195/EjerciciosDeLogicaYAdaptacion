// Autor Kristel Guzman Venegas


let array1 = [2,3,4,6];
let array2 = [123,67,890,4];
let array3 = [2,3,7,9,4,5,6,9,12];
var array4 = [];
array1.map(iterate);
array2.map(iterate);
array3.map(iterate);

function iterate(value, index, array) {
    var number = 1;

    for (var i = 0; i < array.length; i++) {
        if(i !== index){
            number = number * array[i] ;
        }
    }
    array4.push(number);
    if(array.length === array4.length){
        showMessage(array, array4);
        array4 = [];
    }
}

function showMessage(){
    console.log(array4);
}