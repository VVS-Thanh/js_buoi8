let colors = ["white", "blue", "yellow", "black", "red", "green"];
// let fist_color = colors[0];
// let second_color = colors[1];
// let other_color = [];
// colors.slice(2).forEach((element) => {
//   other_color.push(element);
// });
// console.log(fist_color);
// console.log(second_color);
// console.log(other_color);

[
  fist_color,
  second_color,
  ...other_colors
  // other_colors,
  // other_colors,
  // other_colors,
] = ["white", "blue", "yellow", "black", "red", "green"];

console.log([other_colors]); //[[arr]] gom biến && trải biến ...
console.log([...other_colors]);
// console.log(other_colors);
// console.log(fist_color);
// console.log(second_color);
