console.log("hello");

var best = document.getElementById('best');
var bestline = document.getElementById('bestline');
var bestgrid = document.getElementById('bestgrid');
var interest = document.getElementById('interest');
var interestline = document.getElementById('interestline');
var interestgrid = document.getElementById('interestgrid');

best.onclick = function () {
    best.className = "tab-pills";
    bestline.className = "blue-line-active";
    interest.className = "tab-pills graytext";
    interestline.className = "blue-line";
    bestgrid.className = "grid-view-interests";
    interestgrid.className = "grid-view-interests d-none";
};


interest.onclick = function () {
    interest.className = "tab-pills";
    interestline.className = "blue-line-active";
    best.className = "tab-pills graytext";
    bestline.className = "blue-line";
    bestgrid.className = "grid-view-interests d-none";
    interestgrid.className = "grid-view-interests";
}
