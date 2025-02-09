
let nav = document.querySelector('.headul')
let open = document.querySelector('#open')
let close = document.querySelector('#close')
let body = document.querySelector('body')

function clickon() {
    nav.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'block'
    clickleft()
}

function clickoff() {
    nav.style.display = 'none'
    close.style.display = 'none'
    open.style.display = 'block'
}




// Side navbar menu code base start from here
let rightarrow = document.querySelector("#rightarrow")
let leftarrow = document.querySelector("#leftarrow")
let left = document.querySelector("#left")
let headul = document.querySelector(".headul")


rightarrow.addEventListener("click", function () {
    left.style.display = 'block'
    rightarrow.style.display = 'none'
    leftarrow.style.display = 'block'
    clickoff()
})

function clickleft() {
    left.style.display = 'none'
    leftarrow.style.display = 'none'
    rightarrow.style.display = 'block'
}





// Side navbaar code start from here
// for first subject
let subject_name = document.querySelector(".subject_name")
let first_ul = document.querySelector(".first_ul")

subject_name.addEventListener("click", function () {
    first_ul.classList.toggle("toggle")
    second_ul.classList.remove("toggle1")
    third_ul.classList.remove("toggle2")
    fourth_ul.classList.remove("toggle3")
    fourth_ul.classList.remove("toggle4")
    fifth_ul.classList.remove("toggle4")
    sixth_ul.classList.remove("toggle5")
})



// for second subject
let subject_name1 = document.querySelector(".subject_name1")
let second_ul = document.querySelector(".second_ul")

subject_name1.addEventListener("click", function () {
    second_ul.classList.toggle("toggle1")
    first_ul.classList.remove("toggle")
    third_ul.classList.remove("toggle2")
    fourth_ul.classList.remove("toggle3")
    fourth_ul.classList.remove("toggle4")
    fifth_ul.classList.remove("toggle4")
    sixth_ul.classList.remove("toggle5")
})




// for third subject
let subject_name2 = document.querySelector(".subject_name2")
let third_ul = document.querySelector(".third_ul")

subject_name2.addEventListener("click", function () {
    third_ul.classList.toggle("toggle2")
    first_ul.classList.remove("toggle")
    second_ul.classList.remove("toggle1")
    fourth_ul.classList.remove("toggle3")
    fourth_ul.classList.remove("toggle4")
    fifth_ul.classList.remove("toggle4")
    sixth_ul.classList.remove("toggle5")
})




// for fourth subject
let subject_name3 = document.querySelector(".subject_name3")
let fourth_ul = document.querySelector(".fourth_ul")

subject_name3.addEventListener("click", function () {
    fourth_ul.classList.toggle("toggle3")
    first_ul.classList.remove("toggle")
    second_ul.classList.remove("toggle1")
    third_ul.classList.remove("toggle2")
    fifth_ul.classList.remove("toggle4")
    sixth_ul.classList.remove("toggle5")
})


// for fifth subject
let subject_name4 = document.querySelector(".subject_name4")
let fifth_ul = document.querySelector(".fifth_ul")

subject_name4.addEventListener("click", function () {
    fifth_ul.classList.toggle("toggle4")
    first_ul.classList.remove("toggle")
    second_ul.classList.remove("toggle1")
    third_ul.classList.remove("toggle2")
    fourth_ul.classList.remove("toggle3")
    sixth_ul.classList.remove("toggle5")
})


// for sixth subject
let subject_name5 = document.querySelector(".subject_name5")
let sixth_ul = document.querySelector(".sixth_ul")

subject_name5.addEventListener("click", function () {
    sixth_ul.classList.toggle("toggle5")
    first_ul.classList.remove("toggle")
    second_ul.classList.remove("toggle1")
    third_ul.classList.remove("toggle2")
    fourth_ul.classList.remove("toggle3")
    fifth_ul.classList.remove("toggle4")
})









// function first_click(){
//     first_ul.style.display='block'
// }


// subject_name.addEventListener('click', function(){
//     first_ul.style.display='block'
// })

// subject_name.addEventListener("click", function(){
//     first_ul.classList.add("add")
// })
// subject_name.addEventListener("click", function(){
//     first_ul.classList.remove("add")
// })
