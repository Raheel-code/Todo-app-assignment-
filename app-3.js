var a = document.getElementById('two')
var b = document.getElementById('one')

function inp(){
    var newElement = document.createElement("P")
    var text = one.value
    text = document.createTextNode(text)
    newElement.appendChild(text)
    a.appendChild(newElement)
    b.value = ''

    var editBtn = document.createElement('BUTTON')
    var editBtntext = document.createTextNode("EDIT")
    editBtn.appendChild(editBtntext)
    editBtn.setAttribute('onclick','editTodo(this)')
    editBtn.setAttribute('class','e1')
    newElement.appendChild(editBtn)


    var deleteBtn = document.createElement('BUTTON')
    var deleteBtnText = document.createTextNode('DELETE')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
    deleteBtn.setAttribute('class','d2')
    newElement.appendChild(deleteBtn)
}

function deleteTodo(e){
    console.log(e.parentNode)
        e.parentNode.remove()
}

function editTodo(e){
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = prompt('Enter New Value',e.parentNode.firstChild.nodeValue)
        
}
function remove(){
    a.innerHTML = ' '
}