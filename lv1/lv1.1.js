let count1 = 0;
let count2 = 0;
function changecolor() {

    if (count1 % 3 == 0) {
        document.body.style.backgroundColor = "rgb(46, 240, 207)";
    }
    else if (count1 % 3 == 1) {
        document.body.style.backgroundColor = "rgb(247, 177, 235)";
    }
    else if (count1 % 3 == 2) {
        document.body.style.backgroundColor = "rgb(216, 245, 164)";
    }
    count1 = count1 + 1;
}
function changesize() {
    if (count2 % 3 == 0) {
        document.getElementById('div1').style.fontSize = "25px";
    }
    if (count2 % 3 == 1) {
        document.getElementById('div1').style.fontSize = "28px";
    }
    if (count2 % 3 == 2) {
        document.getElementById('div1').style.fontSize = "33px";
    }
    count2 = count2 + 1;
}
