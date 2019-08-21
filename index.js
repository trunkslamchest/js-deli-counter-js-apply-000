// var katzDeli = [];
// var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(deli, name) {

  deli.push(name);

	return `Welcome, ${name}. You are number ${deli.length} in line.`;
}

// console.log(takeANumber(katzDeli, 'Ada'));
// console.log(takeANumber(katzDeli, 'Grace'));
// console.log(takeANumber(katzDeli, 'Kent'));
// console.log(takeANumber(["James", "Mark", "Cindy", "Fido"], "Ada"))

function nowServing(deliLine) {

  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    let deliLine_remove = deliLine.shift();
    return `Currently serving ${deliLine_remove}.`;
  }

}

// console.log(nowServing(katzDeli))
// console.log(nowServing(otherDeli))
// console.log(nowServing([]))
// console.log(nowServing(["James", "Mark", "Cindy", "Fido"]))

function currentLine(deliLine) {
  let name_str = '';
  let i = 0;

  while (i < deliLine.length) {
    if (i > 0) {
      name_str += ', ';
    }
    name_str += `${i + 1}. ${deliLine[i]}`;
  i++;
  }

    if (deliLine.length === 0) {
      return 'The line is currently empty.';
    }

  return 'The line is currently: ' + name_str;
}

// console.log(currentLine(katzDeli))
// console.log(currentLine(otherDeli))
// console.log(currentLine(["Bill", "Jane", "Ann"]))
// console.log(currentLine([]))
// console.log(currentLine(["James", "Mark", "Cindy", "Fido"]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function currentLine(deliLine) {
//   let name_str = '';
//   let i = 0;

//     if (deliLine.length > 0) {
//       name_str += 'The line is currently: ';
//       while (i < deliLine.length) {
//         if (deliLine.length === 1 || i === deliLine.length - 1) {
//           name_str += `${i + 1}. ${deliLine[i]}`;
//         }
//         else {
//           name_str += `${i + 1}. ${deliLine[i]}, `;
//         }
//       i++;
//       }
//     }
//     else  {
//       name_str = 'The line is currently empty.';
//     }

//   return name_str;
// }

// console.log(currentLine(katzDeli))
// console.log(currentLine(otherDeli))
// console.log(currentLine(["Bill", "Jane", "Ann"]))
// console.log(currentLine([]))
// console.log(currentLine(["James", "Mark", "Cindy", "Fido"]))