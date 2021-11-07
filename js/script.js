//function for likes
var counter = document.getElementById("counter").innerText;
console.log(counter);

document.getElementById("thumb").addEventListener("click", () => {
  counter++;
  document.getElementById("counter").innerHTML = counter;
});
