let array =[12,334,56,55,666,525];
console.log(array.splice(3,2));
console.log(array);
console.log(array.slice(1,2));
// .indexOf(value)

// .lastIndexOf(value)

// .includes(value)

// .find(callback) → first matching element.

// .findIndex(callback) → index of match.

// .some(callback) → true if any matches.

// .every(callback)
console.log(array.indexOf(56));
console.log(array.includes(33));
console.log(array.find(x=>x<90));
console.log(array.findIndex(x=>x>20));
console.log(array.sort());
console.log(array.some(x=>x>60));
console.log(array.every(x=>x>50));
console.log(array.reverse());
console.log(array.toString());
