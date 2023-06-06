let fname : string = 'Murphy';

let lowername = fname.toLowerCase();

console.log(lowername)

const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Red;

let swapNubs: [number, number];

function swapNumbers(num1:number,num2:number): [number,number] {
    return[num2, num1]
}

swapNubs = swapNumbers(10, 20);

swapNubs[1]