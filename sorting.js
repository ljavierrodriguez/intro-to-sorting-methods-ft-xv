let nombres = [
    "Luis", "Maria", "Ana",
    "Santiago", "Manuel", "Alonso",
    "Miguel", "Pedro", "Julio",
    "Camila", "Anastacia", "Jorge",
    "Saul", "Oscar", "Sofia"
];


console.log(nombres);
console.log(bubbleSort(nombres));
console.log(selectSort(nombres));

function bubbleSort(arr = []) {
    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) { 
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
            index++;
        }
        wall--;
    }
    return arr;
}

function selectSort(arr = []) {
    let min = 0;
    let wall = arr.length - 1;
    while(min < wall){
        let index = min + 1;
        while(index < arr.length){
            if(arr[min] > arr[index]){
                let aux = arr[min];
                arr[min] = arr[index];
                arr[index] = aux;
            }
            index++;
        }
        min++;
        wall--;
    }
    return arr;
}

