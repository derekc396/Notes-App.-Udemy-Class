import * as dayjs from 'dayjs'

let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event){
    const id = uuidv4();

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/notes-app/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// let now = dayjs()
// // now.add(1, 'year').subtract(20, 'days')
// console.log(now.add(1, 'year').format("MMMM D, YYYY"))
// // console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()
// console.log()

// const now = dayjs()
// console.log(now.subtract(32, 'years').subtract(2, 'months').subtract(6, 'days').toString())

// const birthday = dayjs()
// console.log(birthday.year(1990).month(3).date(12).format('MMM D, YYYY').toString())
// console.log(birthday.format('MMM D, YYYY'))

// console.log(now.toString())

const now = new Date().getTime()

console.log(now)



