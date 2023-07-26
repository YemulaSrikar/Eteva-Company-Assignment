const List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

const arr_1 = [];
const arr_2 = [];
const arr_3 = [];

// 1st solution

for (let i of List1) {
  if (List2.includes(i) === false) {
    arr_1.push(i);
  }
}

// 2nd solution

for (let i of List2) {
  if (List1.includes(i) === false) {
    arr_2.push(i);
  }
}

// 3rd solution

for (let i of List1) {
  for (let j of List2) {
    if (i === j) {
      arr_3.push(i);
    }
  }
}
console.log(arr_1);
console.log(arr_2);
console.log(arr_3);
