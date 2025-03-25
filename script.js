let set_btn = document.querySelector("#userinput button") ;
let input_goal = document.querySelector("#userinput input") ;
let list = document.querySelector("#list") ;

set_btn.addEventListener("click",()=>{
    let goal = input_goal.value ;
    if(goal == "") alert("No Goal is Set!!") ;
    else {
        let point = document.createElement("div") ;

        let unch_img = document.createElement("img") ;
        unch_img.src = "unchecked.png" ;
        point.appendChild(unch_img) ;

        let p = document.createElement("p") ;
        p.innerText = goal ;
        point.appendChild(p) ;

        let close = document.createElement("i") ;
        close.classList.add("ri-close-circle-line") ;
        point.appendChild(close) ;

        //<i class="ri-close-circle-line"></i>

        point.classList.add("point") ;
        list.appendChild(point) ;
    }   
    input_goal.value = "" ;
    savedata() ;

})

list.addEventListener("click",(event)=>{
    if (event.target.tagName.toLowerCase() === "img") {
        if (event.target.src.includes("unchecked")) {
            event.target.src = "checked.png"; 
            let pointDiv = event.target.closest('.point');
            let text = pointDiv.querySelector("p");
            text.style.textDecoration = "line-through" ;
            savedata() ;
        }
        else if(event.target.src.includes("checked")) {
            event.target.src = "unchecked.png"; 
            let pointDiv = event.target.closest('.point');
            let text = pointDiv.querySelector("p");
            text.style.textDecoration = "none" ;
            savedata() ;
        }
    }
    if(event.target.tagName.toLowerCase() === "i") {
        event.target.parentElement.remove() ;
        savedata() ;
    }
})

function savedata() {
    localStorage.setItem("data", list.innerHTML) ;
}

function showdata() {
    list.innerHTML = localStorage.getItem("data") ;
}
showdata() ;
