

const type = document.getElementById(`new-task-description`)
const list = document.getElementById(`list-items`)
const list2 = document.getElementById(`previous-days`)
const btn = document.getElementById(`create-task-form`)

btn.addEventListener(`submit`, (e) => {
 e.preventDefault()
 const li = document.createElement(`li`)
 li.innerText = type.value
 list.append(li) 
 type.innerText = ``

 const deleteBtn = document.createElement(`button`)
 deleteBtn.innerText = `Delete`
 li.setAttribute(`class`, `list-li`)
 li.append(deleteBtn)
 deleteBtn.addEventListener(`click`, () =>{
  li.remove()
 
 })
})


const renderData = () => {

 console.log(test.something.length)
}




const renderFooter = (store) =>{
 let footerDiv = document.querySelectorAll(`footer div`)
 footerDiv[1].innerText = store.name
}

renderFooter(1)

const renderHeader = (store) => {
const header = document.getElementById(`header-title`)
header.innerText = store.name
}

renderHeader(1)