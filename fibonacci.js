// Non-recursive solution
function fibs(n) {
  let first = 0;
  let second = 1;
  let array = [];

  for (let i = 0; i < n; i++) {
    array.push(first);
    let temp = second;
    second += first;
    first = temp;
  }

  return array;
}

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  let array = fibsRec(n - 1);
  let currentNum = array[n - 2] + array[n - 3];
  array.push(currentNum);
  return array;
}

console.log("Non-recursive: ", fibs(8));
console.log("Recursive: ", fibsRec(8));
