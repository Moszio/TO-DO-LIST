

const type = document.getElementById(`new-task-description`)
const list = document.getElementById(`list-items`)
const list2 = document.getElementById(`previous-days`)
const btn = document.getElementById(`create-task-form`)
const btn3 = document.getElementById(`add-btn`)
const infoUrl = `https://anapioficeandfire.com/api`






const fetchData = (id) => {
 fetch(`https://anapioficeandfire.com/api/books/${id}`)
 .then(res => res.json())
 .then(req => {
  renderHeader(req)
 }).catch(err => {
  console.log(`Here is the ${err}`)
 })
}



/*
const changeTitle = () => {
for(let i = 0; i < 10; i++)

fetchData(i)
}


btn3.addEventListener(`click`, (e) => {
 changeTitle(e)
})

*/





btn.addEventListener(`submit`, (e) => {
 e.preventDefault()
 let addReminder = {
  title: e.target.Title.value,
  note: e.target.Note.value,
 } 
 


 const deleteBtn = document.createElement(`button`)
 deleteBtn.innerText = `Delete`
 li.setAttribute(`class`, `list-li`)
 li.append(deleteBtn)
 deleteBtn.addEventListener(`click`, () =>{
  li.remove()
 
 })
 
})

const renderBookCard = () =>{
 const li = document.createElement(`li`)
 
}



const renderFooter = (book) =>{
 let footerDiv = document.querySelectorAll(`footer div`)
 footerDiv[0].innerText = book.name
 footerDiv[1].innerText = book.name
 footerDiv[2].innerText = book.name
}


const renderHeader = (book) => {
const header = document.getElementById(`header-title`)
header.innerText = book.name
}

const createResource = (url, body) => {
 return fetch(url, {
  method: `POST`,
  headers: {
   `content-type`: `application/json`
  },
  body: json (body)
 })
 .then(res =>res.json())
}


const renderBook = (e) => {
 const book ={
  title: e.target.name.value
 }
}