
let count = 0;
function addLike(element){
    let prevSibling = element.closest(".container-2").querySelector("#like")
    count++
    prevSibling.innerText=`${count} Like(s)` 
}


function addStyleOver(event){
    event.classList.replace("btn-1", "btn-1")
}

function addStyleOut(event){
    event.classList.replace("btn-2", "btn-1")
}