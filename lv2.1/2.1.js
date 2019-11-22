(function(){
    let ul=document.getElementById("ul");
    ul.addEventListener("click",show,false);
    function show(e){
        let x=e.target;
        console.log(x.innerHTML)
    }
    
})()