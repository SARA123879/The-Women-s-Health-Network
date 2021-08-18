/* .js files add interaction to your website */
var factlist = [
  "In 2021, almost twenty bills have been introduced in 9 states to advance menstrual equity by requiring free access to period products, eliminating tax, and requiring ingredient disclosure.",
  "Scientists say they have made a breakthrough in the way breast cancer is treated by using a targeted cancer drug, known as olaparib, after chemotherapy.",
  "More women have had mammograms in the past two years. This has led to an estimated 10% drop in breast cancer deaths.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact (){
  fact.innerHTML =factlist[count];
  count++;
  if (count == factlist.length){
    count = 0;
  }
}

function myFunction() {
  location.replace("takeaction.html")
}