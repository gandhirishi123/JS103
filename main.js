   
var arr1 = [{ name:'s1', rollno:18 ,m: { p:70 ,c:60 ,math:90}},
    { name:'s2', rollno:19 , m: {p:60 ,c:20 ,math:40}},
    { name:'s3', rollno:20 , m:{p:50 ,c:30 ,math:20}},
    { name:'s4', rollno:21 , m:{p:40 ,c:40 ,math:80}},
    { name:'s5', rollno:22 , m:{p:30 ,c:90 ,math:60}},
    { name:'s6', rollno:23 , m:{p:80 ,c:70 ,math:50}}
]

function printdata(){
    document.getElementById('mydata').innerHTML+=''
for (var i = 0; i < arr1.length; i++) {
document.getElementById('mydata').innerHTML+=`
<tr>
    <td>${i+1}</td>
    <td>${arr1[i].name}</td>
    <td>${arr1[i].rollno}</td>
    <td>${arr1[i].m.p}</td>
    <td>${arr1[i].m.c}</td>
    <td>${arr1[i].m.math}</td>
    <td>${arr1[i].m.p+arr1[i].m.c+arr1[i].m.math}</td>
    <td>${(((arr1[i].m.p+arr1[i].m.c+arr1[i].m.math)/300)*100).toFixed(2)}</td>
    <td>
        ${calgrade(arr1[i].m)}
    </td>
    <td>${result(arr1[i].m)}</td>
</tr>`
}
}


document.getElementById('sb').addEventListener('click',fun1)

function fun1(){
    var a = document.getElementById('sname').value
    var b = parseInt(document.getElementById('rno').value)
    var c = parseInt(document.getElementById('pm').value)
    var d = parseInt(document.getElementById('cm').value)
    var e = parseInt(document.getElementById('mm').value)
    arr1.push(a,b,c,d,e)
    printdata()
}

printdata()
function result(m){
    var total = arr1[i].m.p+arr1[i].m.c+arr1[i].m.math
    if(total>120){
    return"PASS"}else {
        return "FAIL"}
}

function calgrade(m){
    var total = arr1[i].m.p+arr1[i].m.c+arr1[i].m.math
    var percent = (((arr1[i].m.p+arr1[i].m.c+arr1[i].m.math)/300)*100).toFixed(2)
    if(percent>90){
        return"A"}else {
        return "Fail"
    }
}

// calgrade()

















// const tx1 = document.getElementById('nom')
// const tx2 = document.getElementById('sname')
// const tx3 = document.getElementById('nom')

// function fun1(){
// out1.innerHTML = tx1.value;
// }
// sb.addEventListener('click',fun1)
// const out1= document.getElementById('out1')

