/*+ Lấy mảng gồm tất cả names
+ Lấy mảng gồm tất cả height
+ Tìm những người có height nhỏ hơn 100
+ Tìm những người có mass lớn hơn 100
+ Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
*/

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
const nameCharArr = [];
const heightCharArr = [];
characters.forEach((element) => {
  return nameCharArr.push(element.name) && heightCharArr.push(element.height);
});
console.log(nameCharArr);
console.log(heightCharArr);

//Tìm những người có height nhỏ hơn 100
let under100HeightArr = characters.filter((value) => value.height < 100);

//Tìm những người có mass lớn hơn 100
let above100MassArr = characters.filter((value) => value.mass > 100);

console.log(under100HeightArr);
console.log(above100MassArr);

//Bubble-sort theo tên
const sortName = characters.sort((a, b) => {
  let nameNumber1 = a.name.toLowerCase(),
    nameNumber2 = b.name.toLowerCase();

  if (nameNumber1 < nameNumber2) {
    return -1;
  }
  if (nameNumber1 > nameNumber2) {
    return 1;
  }
  return 0;
});

//Bubble-sort theo cân nặng
let sortHeight = characters.sort((a, b) => {
  if (a.height < b.height) {
    return -1;
  }
  if (a.height > b.height) {
    return 1;
  }
  return 0;
});

//Bubble-sort theo giới tính
let sortGender = characters.sort((a, b) => {
  let fa = a.gender.toLowerCase(),
    fb = b.gender.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

console.log(sortName);
console.log(sortHeight);
console.log(sortGender);
