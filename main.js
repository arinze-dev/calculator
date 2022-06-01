var btn = document.querySelectorAll('button');
var outputArea = document.querySelector(".output_area");


if (outputArea.value>= 20) {
  console.log(outputArea);
   outputArea.innerHTML = " can not";  
} else {
  btn[0].onclick = function () {
 outputArea.innerHTML = "";
}
btn[1].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[2].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[3].onclick = function () {
 outputArea.innerHTML += this.innerText;
 
}
btn[4].onclick = function () {
  outputArea.innerHTML += this.innerText;
}
btn[5].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[6].onclick = function () {
 outputArea.innerHTML += btn[6].innerText;
}
btn[7].onclick = function () {
  outputArea.innerHTML += this.innerText;
}
btn[8].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[9].onclick = function () {
  outputArea.innerHTML += this.innerText;
}
btn[10].onclick = function () {
  outputArea.innerHTML += this.innerText;
}
btn[11].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[12].onclick = function () {
  outputArea.innerHTML += this.innerText;
}
btn[13].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[14].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[15].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[16].onclick = function () {
 outputArea.innerHTML = "";
}
btn[17].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[18].onclick = function () {
 outputArea.innerHTML += this.innerText;
}
btn[19].onclick = function () {
  outputArea.innerHTML = eval(outputArea.innerHTML);
};
  
}

