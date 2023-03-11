var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Lahore', 'Karachi', 'Quetta'];
console.log('Original Array: ', places);
console.log('Alphabetical Order: ', __spreadArray([], places, true).sort());
console.log('Original Array: ', places);
console.log('Revers Alphabetical Order: ', __spreadArray([], places, true).sort().reverse());
console.log('Original Array: ', places);
places.reverse();
console.log('Original Array in reverse order: ', places);
places.reverse();
console.log('Original Array in again reverse order: ', places);
console.log('Alphabetical Order: ', places.sort());
console.log('Revers Alphabetical Order: ', places.sort().reverse());
