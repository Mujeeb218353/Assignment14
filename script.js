let table = document.createElement('table');
table.className = 'table';
table.id = 'table';
let thead = document.createElement('thead');
thead.id = 'thead';
let theadTr = document.createElement('tr');
theadTr.id = 'theadTr';
let theadTrThElements = ['ID', 'Name', 'Grade', 'Action'];
let tbody = document.createElement('tbody');
tbody.id = 'tbody';
document.getElementById('tableData').appendChild(table);
document.getElementById('table').appendChild(thead);
document.getElementById('table').appendChild(tbody);
document.getElementById('thead').appendChild(theadTr);
for(let i=0;i<theadTrThElements.length;i++){
    let theadTrTh = document.createElement('th');
    document.getElementById('theadTr').appendChild(theadTrTh).innerHTML = theadTrThElements[i];
}
let data = [[1,'Mujeeb',10],[2,'Farhan Khan',9],[3,'Muhammad Hashim',8],[4,'Ali',7],[5,'Rehman',6]];
for(let j=0;j<data.length;j++) {
    let tbodyTr = document.createElement('tr');
    document.getElementById('tbody').appendChild(tbodyTr);
    tbodyTr.id = 'tbodyTr_' + (j + 1);
}
for(let k=0;k<data.length;k++) {
    let tbodyTrTh = document.createElement('th');
    document.getElementById('tbodyTr_' + (k + 1)).appendChild(tbodyTrTh).innerHTML = data[k][0];
    for (let l = 1; l <= data[k].length; l++) {
        let tbodyTrTd = document.createElement('td');
        tbodyTrTd.id = 'tbodyTrTd_'+(l+k);
        document.getElementById('tbodyTr_'+(k+1)).appendChild(tbodyTrTd).innerHTML = data[k][l];
        if(l === data[l].length) {
            document.getElementById('tbodyTrTd_'+(l+k)).innerHTML = '<button  class="btn btn-primary" id="dltBtn_'+(k+l)+'" onclick="dltBtn(this.id)">Delete</button>';
        }
    }
}
function dltBtn(id){
    document.getElementById(id).parentNode.parentElement.remove();
}
let img1 = document.createElement('img');
img1.src = 'mob1.png';
img1.style.height = '300px';
img1.style.width = '300px';
img1.id = 'img';
document.getElementById('img-set').appendChild(img1);
img1.addEventListener('mouseover',()=>{
    img1.src = 'mob5.jpeg';
});
img1.addEventListener('mouseout',()=>{
    img1.src = 'mob1.png';
});
function addition(){
    document.getElementById('showNumber').value++;
}
function subtraction(){
    document.getElementById('showNumber').value--;
}


