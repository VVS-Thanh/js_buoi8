person = {
  first: "Elon",
  last: "Musk",
  twitter: "@elonmusk",
  company: "Space X",
};

var displayName = function (x, y, obj) {
  obj["first"] = x;
  obj["last"] = y;
  return `Full Name: ${x} ${y}`;
};

let a = displayName("thanh", "lang", person);
console.log(a);
