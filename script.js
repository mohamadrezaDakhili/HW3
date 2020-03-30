// answer One question
function funcDelete() {
  let arr = [1, 2, 3, 4, 5, 6];
  let item = document.getElementById("itemDelete").value;
  if (item == "") {
    alert("please write number in question One");
  } else {
    let x = arr.splice(item, 1);
    document.getElementById("textArray").innerHTML =
      "New Array list :" + "[ " + arr + " ]";
  }
}
// answer Two question
let arrOne = [1, 2, 3];
let arrTwo = [7, 8, 9];
let arrThree = [4, 5, 6];
let fullArr = arrOne.concat(arrTwo, arrThree);
document.getElementById("fullArr").innerHTML = "full Array :" + fullArr;

function sortArray() {
  fullArr.sort();
  document.getElementById("fullArrSort").innerHTML = "Array Sort:" + fullArr;
}
// answer Three question
let arrT = [1, 2, [9, 4, [4, 7], 5], 3, 1];
function flatArray() {
  let flatArr = arrT.flat();
  document.getElementById("arrayFlaten").innerHTML = "Array Flat :" + flatArr;
}

// answer Four question
let arrFind = [20, 18, 15, 10, 9];
function funcFindIndex() {
  let number = document.getElementById("inputIndex").value;
  let isNumber = element => element == number;
  let textIndex = document.getElementById("textIndex");
  let indexItem = arrFind.findIndex(isNumber);
  if (arrFind.findIndex(isNumber) == -1) {
    indexItem = "This item does not exist";
  }
  textIndex.innerHTML = "Index item = " + indexItem;
}

// answer Five question
function replaceItem() {
  let items = ["a", "b", "c", "d", "e", "f", "g"];
  let item = "a";
  let newItem = "s";
  var index = items.indexOf(item);
  if (index !== -1) {
    items[index] = newItem;
  } else {
    alert("This item does not exist");
  }
  let newArray = document.getElementById("newArray");
  newArray.innerHTML = "new Array = " + items;
}
// answer six question
function numbersInString(string) {
  string = document.getElementById("stringItem").value;
  let number = document.getElementById("textNumber");
  number.innerHTML ="Number = "+ string.match(/\d/g);
}
