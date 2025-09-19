import { computed, signal } from "@angular/core";

let number1 = 1;
let number2 = 100;
let number3 = number1 + number2;

console.log("-->" + number3);

number1 = 1000;

console.log("-->" + number3);


let a = signal(1);
let b = signal(2);
let c = computed(() => a() + b());

console.log("---->" + c());

b.set(300);

console.log("---->" + c());

