/*
Mọi người hãy sử dụng html, css để làm 1 card về bài viết có tên tác giả (name), title, description nhé.
Nếu description mà dài quá 50 kí tự thì hiển thị chữ read more.
Người dùng ấn vào chữ read more sẽ show full cả description ra đồng thời xuất hiện nút read less.
Ấn vào read less sẽ chỉ hiển thị 50 từ thôi.
 */

const articles = [
  {
    name: "Neuer",
    title: "Học Javascript như thế nào",
    description: `1 An array of odd numbers. An array of numbers divisible by 2 or 5. An array of numbers divisible by 3 and then squared those numbers. The sum of the following: square the numbers divisible by 5.`,
  },
  {
    name: "Neuer Goretzka",
    title: "Học React như thế nào",
    description: `2 An array of odd numbers. An array of numbers divisible by 2 or 5. An array of numbers divisible by 3 and then squared those numbers. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5.`,
  },

  {
    name: "Goretzka Neuer",
    title: "Làm thế nào để trở lên tốt hơn",
    description: `3 An array of odd numbers. An array of numbers divisible by 2 or 5. An array of numbers divisible by 3 and then squared those numbers. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5. The sum of the following: square the numbers divisible by 5.`,
  },
];

articles.forEach((element, i) => {
  const main = document.querySelector(".container");
  console.log(main);

  const card = document.createElement("div");
  card.classList = "card";

  let newArr = articles.map((value) =>
    value.description.replace(/(\r\n|\n|\r)/gm, "").split(" ")
  );
  let newData = newArr.map((value) => {
    if (value.length - 1 < 50) {
      return value.join(" ");
    } else {
      return value.join(" ");
    }
    // if (value.length - 1 < 50) {
    //   return value.join(" ");
    // } else {
    //   return value.join(" ");
    // }
  });
  spliceArr = newArr.map((value) => {
    return value.splice(" ", 50).join(" ");
  });
  let bigData = articles.map((data) => {
    return data.description;
  });
  let sliceData = bigData.map((value) => {
    let limit = value.split(" ").length;
    if (limit < 50) {
      return value.split(" ", limit).join(" ");
    } else {
      return value.split(" ", 50).join(" ").concat(" [...]");
    }
  });
  // console.log(sliceData);
  const articlesCard = `
  <h3>Tác giả: ${articles[i].name}</h3>
  <h4>Tiêu đề: ${articles[i].title}</h4>
  <p id="content${i}">${sliceData[i]}</p>
  <p id="des${i}" style = "display :none" >${articles[i].description}</p>
  <button id="read${i}" onclick="readMore(${i})">Read more</button>
  `;

  //   const articlesCard = `
  // Tác giả: ${articles[i].name}
  // Tiêu đề: ${articles[i].title}
  // ${articles[i].description.slice(0, 50)}
  // Read more `;
  card.innerHTML += articlesCard;
  main.appendChild(card);
});

function readMore(index) {
  const selectElementByIndex = document.getElementById(`content${index}`);
  const selectElementButtonByIndex = document.getElementById(`read${index}`);
  const valueOfElementByIndex = selectElementByIndex.textContent;
  console.log(valueOfElementByIndex.length);
  if (valueOfElementByIndex.length <= 50) {
    selectElementByIndex.innerHTML = articles[index].description;
    selectElementButtonByIndex.innerHTML = "Read Less";
    return;
  }

  selectElementByIndex.innerHTML = articles[index].description.slice(0, 50);
  selectElementButtonByIndex.innerHTML = "Read More";
}

// function readMore(index) {
//   if (index == 1) {
//     document.getElementById("content1").style.display = "none";
//     document.getElementById("des1").style.display = "block";
//     document.getElementById("read1").innerText = "Read less";
//   } else if (index == 2) {
//     document.getElementById("content2").style.display = "none";
//     document.getElementById("des2").style.display = "block";
//     document.getElementById("read2").innerText = "Read less";
//   }
// }
