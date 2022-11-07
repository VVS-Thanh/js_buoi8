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
  let char = "";
  let count = 0;

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
  // .splice(" ", 10);
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
    // return value.length - 1;
  });
  // console.log(sliceData);
  const articlesCard = `
<h3>Tác giả: ${articles[i].name}</h3>
<h4>Tiêu đề: ${articles[i].title}</h4>
<p id="content">${sliceData[i]}</p>
<button id="read" onclick ="readMore(this)">Read more</button>
`;
  function readMore() {
    let sliceData = bigData.map((value) => {
      let limit = value.split(" ").length;
      if (limit < 50) {
        document.getElementById("read").style.display = "none";
      } else
        document.getElementById("content").innerHTML = value
          .split(" ", value.length)
          .join(" ");
      document.getElementById("read").innerHTML = "Read less";
    });
  }
  card.innerHTML += articlesCard;
  main.appendChild(card);
});

// let bigData = articles.map((data) => {
//   return data.description;
// });
// let sliceData = bigData.map((value) => {
//   let limit = value.split(" ").length - 1;
//   if (limit < 50) {
//     return value.split(" ", limit).join(" ");
//   } else {
//     return value.split(" ", 50).join(" ").concat(" [...]");
//   }
//   // return value.length - 1;
// });
// console.log(sliceData);
