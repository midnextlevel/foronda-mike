//Introduction to Array

//Creating an Array

let fruits =['apple','banana','orange'];

console.log('First Fruit',fruits[0]);
console.log('Second Fruit',fruits[1]);
console.log('Third Fruit',fruits[2]);

// Modifying Arrays

fruits[1] = 'grape';
fruits.push('strawberry');
fruits.pop();
console.log('Modified Array', fruits);

//Array Iteration

let numbers = [1,2,3,4,5];

for(let i = 0; i < numbers.length;i++ ){
    console.log(numbers[i]);
}


//Array For each

let colors=['red','green','blue'];

colors.forEach(function(color){
    console.log(color);
});

//Methods and Properties

//length

console.log('Array Length:',numbers.length);

//index0f
console.log('index of 3:',numbers.indexOf(3));

//includes (bool)
console.log('Includes 5:',numbers.includes(5));

//join
console.log ('Joined Array', numbers.join('-'));

//slice

let slicedArray = numbers.slice(1,4);
console.log('Sliced Array',slicedArray);