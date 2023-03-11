let places:string[]=['Lahore','Karachi','Quetta'];
console.log('Original Array: ', places);

console.log('Alphabetical Order: ',[...places].sort());
console.log('Original Array: ', places);

console.log('Revers Alphabetical Order: ',[...places].sort().reverse());
console.log('Original Array: ', places);

places.reverse();
console.log('Original Array in reverse order: ', places);

places.reverse();
console.log('Original Array in again reverse order: ', places);

console.log('Alphabetical Order: ',places.sort());

console.log('Revers Alphabetical Order: ',places.sort().reverse());
