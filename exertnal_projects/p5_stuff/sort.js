// Global
var TOTAL_ITEMS= 15;
var MAXIMUM_VALUE = 20;


// Functions
function Node(number){
    this.value = number;
    this.color = [0, 255, 255];

    this.getValue = function(){
        return this.value;
    }

    this.getColor = function(){
        return this.color;
    }

    this.setColor = function(newColor){
        this.color = newColor;
    }
}

function UnsortedArray(totalItems, maxValue){
    this.array = []
    this.maxValue = maxValue;
    this.arrayLength = totalItems;
    
    this.getNodes = function(){
        return this.array;
    }

    
    this.getValues = function(){
        let tempArr = [];
        for(node of this.array){
            //console.log(node.getValue());
            tempArr.push(node.getValue());
        }
        return tempArr;
    
    }

    this.getLength = function(){
        return this.arrayLength;
    }

    this.createArray = function()
    {
        let totalItems = this.arrayLength;
        while(totalItems){
            let value = 0;
            while(value == 0){
                value = Math.floor(Math.random() * (this.maxValue + 1));
            }
            let newNode = new Node(value)
            this.array.push(newNode);
            totalItems--;
        }
    }

}

function setup(){
    // Initialize Variables
        // Canvas Setup
    w = document.getElementById('canvas').offsetWidth - 20;
    h = 400;
    bgColor = [255, 255, 255];
    let canvas = createCanvas(w, h);
    canvas.parent('canvas');
    background(bgColor[0], bgColor[1], bgColor[2]);

    // Sorting Setup
    
}

function draw(){
    // This function is used to display an array
    function displayArray(anArray){
        var size = anArray.getLength()
        anArray.getValues();
        for(let i = 0; i < size; i++){
            let nodeValue = anArray.getValues()[i]
            fill(anArray.getNodes()[i].getColor());
            rect(i * (w / size), h , w / size, (-h + 10) / MAXIMUM_VALUE * nodeValue);
            console.log(nodeValue);
        }
    }

    // Running stuff here
    myArr = new UnsortedArray(TOTAL_ITEMS, MAXIMUM_VALUE);
    myArr.createArray();
    displayArray(myArr);
    

    
    noLoop();
}