
const url="http://localhost/startbootstrap-freelancer-gh-pages/startbootstrap-freelancer-gh-pages/phpfiles/info.php"
var data;
fetch(url
.then(res=>res.json())
.then(data=>{ 
    data=data.message
    console.log("hi")
}))
var tb=document.querySelector("table")
var vw=document.querySelector("view")
vw.addEventListener("click",()=>{
data.array.forEach(element => {
    tb.appendChild(tr)
    const tr=  document.createElement('tr')
    const th1=document.createElement("th")
    const th2=document.createElement("th")
    const th3=document.createElement("th")
    const th4=document.createElement("th")
    const th5=document.createElement("th")
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    th1.value=element["id"]
    th2.value=element["name"]
    th3.value=element["email"]
    th4.value=element["phonenb"]
    th5.value=element["messages"]


    
});})