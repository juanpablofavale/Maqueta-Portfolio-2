let btnCancel = document.getElementById("cancel")
let btnOk = document.getElementById("ok")
let btnDelete = document.getElementsByClassName("eliminar")
let btnEdit = document.getElementById("editar")

function visible(){
    btnCancel.classList.toggle("visible")
    btnOk.classList.toggle("visible")
    btnEdit.classList.toggle("visible")
    for (i of btnDelete){
        i.classList.toggle("visible")
    }
}

function editar(){
    console.log("editando")
    visible()
}

function eliminar(){
    console.log("eliminando")
}

function ok(){
    console.log("ok")
    visible()
}

function cancel(){
    console.log("cancel")
    visible()
}