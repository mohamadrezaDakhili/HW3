function funcDelete() {
  let arr = [1, 2, 3, 4, 5, 6];
  let item = document.getElementById("itemDelete").value;
  let x = arr.splice(item, 1);
  document.getElementById("textArray").innerHTML =
    "New Array list :" + "[ " + arr + " ]";
}
