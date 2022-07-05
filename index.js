

const type = document.getElementById(`type-list`)
const list = document.getElementById(`list`)
const list2 = document.getElementById(`previous-days`)


const btn = document.getElementById(`add-btn`).addEventListener(`click`, () => {
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


const renderData = (data) => {
 console.log(test.something.length)
}