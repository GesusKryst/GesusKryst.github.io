function createNode()
{}


/*
// Create an array of values
var totalValues = 100;
var maxValue = 10;
var unsortedList = [];
var iter1 = 0;
var iter2 = 0;

function createArray(arrayLength){
    let anArray = [];
    for (let i = 0; i < arrayLength; i++) {
        let val = 0;
        while (val == 0) {
            val = Math.round(Math.random() * maxValue);
        }
        anArray.push(val);
    }
    return anArray;
}

unsortedList = createArray(totalValues);

function setup() {
    // Canvas Size Setup
    var width = 800;
    var height = 500;
    let can = createCanvas(width, height);
    can.parent('canvas');
    background(255);



    // Draw values
    console.log("Unsorted Values: " + unsortedList);

}

function draw() {
    // Functions
    function drawArr() {
        setTimeout(() => { }, 2000);
        background(255);
        for (let i = 0; i <= unsortedList.length; i++) {
            fill(155, 155, 200);
            rect((i * width / totalValues), height, (width / totalValues) - 1, -(unsortedList[i] * height / 10));
        }
    }

    function sortArr() {
        iter1 = 0;
        while (iter1 <= unsortedList.length - 1) {
            if (unsortedList[iter1] < unsortedList[iter2]) {
                let temp = unsortedList[iter1];
                unsortedList[iter1] = unsortedList[iter2];
                unsortedList[iter2] = temp;
                drawArr();
            }
            iter1++;
        }
        iter2++;
        drawArr();
    }

    // Run Program
    drawArr();
    sortArr();
    if (iter2 == unsortedList.length) {
        iter1, iter2 = 0;
        unsortedList = createArray(Math.random() * 100);
        setTimeout(()=>{}, 5000);
    }
}
*/