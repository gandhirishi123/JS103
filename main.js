
// var arr = {physics:40,chemistry:30,maths:20} 
// console.log(arr.physics);
// console.table(arr)

// document.getElementById("demo").style.color="blue";
// const arr = document.getElementsByClassName("example");
// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.backgroundColor = "red";
// }
// const collection = document.getElementsByTagName("P");
// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.backgroundColor = "lightgreen";
// }
// document.getElementsByClassName("RG")[0].innerHTML+=" I hope this works"
        // <td>${arr1.physics}</td>
        // <td>${arr1.chemistry}</td>
        // <td>${arr1.maths}</td>

        var arr1 = [{ name:'s1', rollno:18 , physics:70 ,chemistry:60 ,maths:90},
        { name:'s2', rollno:19 , physics:60 ,chemistry:20 ,maths:40},
        { name:'s3', rollno:20 , physics:50 ,chemistry:30 ,maths:20},
        { name:'s4', rollno:21 , physics:40 ,chemistry:40 ,maths:80},
        { name:'s5', rollno:22 , physics:30 ,chemistry:90 ,maths:60},
        { name:'s6', rollno:23 , physics:80 ,chemistry:70 ,maths:50}]
for (let i = 0; i < arr1.length; i++) {
document.getElementById('mydata').innerHTML+=`
<tr>
    <td>${i+1}</td>
    <td>${arr1[i].name}</td>
    <td>${arr1[i].rollno}</td>
    <td>${arr1[i].physics}</td>
    <td>${arr1[i].chemistry}</td>
    <td>${arr1[i].maths}</td>
</tr>`
}
const tx1 = document.getElementById('nom')
const tx2 = document.getElementById('sname')
const tx3 = document.getElementById('nom')

function fun1(){
out1.innerHTML = tx1.value;
}
sb.addEventListener('click',fun1)
const out1= document.getElementById('out1')