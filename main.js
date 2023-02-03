let btnCancel = document.getElementById("cancel")
let btnOk = document.getElementById("ok")
let btnDelete = document.getElementsByClassName("eliminar")
let btnEdit = document.getElementById("editar")
let btnAdd = document.getElementById("agregar")
let tagMain = document.getElementById("main")

function visible(){
    btnCancel.classList.toggle("visible")
    btnOk.classList.toggle("visible")
    btnEdit.classList.toggle("visible")
    for (i of btnDelete){
        i.classList.toggle("visible")
    }
    btnAdd.classList.toggle("visible")
}

function editar(){
    console.log("editando")
    visible()
    console.log(tagMain.innerHTML)
    tagMain.setAttribute("contenteditable","true")
}

function eliminar(){
    console.log("eliminando")
}

function ok(){
    console.log("ok")
    visible()
    tagMain.removeAttribute("contenteditable")
}

function cancel(){
    console.log("cancel")
    visible()
    tagMain.removeAttribute("contenteditable")
}

function agregar(){
    console.log("agregar")
}