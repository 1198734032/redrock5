function add(){
    let word=document.getElementById("add").value;
    let addword=document.getElementById("addword");
    let div1=document.createElement("div");
    div1.innerHTML=word;
    addword.appendChild(div1);
    document.getElementById("add").value="";  
}