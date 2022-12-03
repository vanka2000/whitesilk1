const nav = Array.from(document.querySelectorAll(".navigation"))
const leftbtn = Array.from(document.querySelectorAll('.left'))
const rightbtn = Array.from(document.querySelectorAll('.right'))
const slidercard = document.querySelector('.slider_card')
const imgcontainer = document.querySelector('.img_container')

leftbtn.map(item => item.dataset.count = 0)


window.addEventListener('click', (event) => {
if(!event.target.classList.contains('navigation')){
   Array.from(document.querySelectorAll('.sub_menu')).map(item => item.classList.remove('sub_menu--active')) 
} else{
    nav.map(item => item.querySelector('.sub_menu').classList.remove('sub_menu--active'))
    event.target.querySelector('.sub_menu').classList.add('sub_menu--active')
}
})



const scrollto = (countCard, container) => {
let cardWidth = document.querySelector('.img_container img').clientWidth
container.scroll({top:0,left:cardWidth*countCard,behavior:'smooth'})
console.log(countCard)
}

leftbtn.map(item => item.addEventListener('click', () => {
    let count = item.dataset.count
    count > 0 ? --count : count = imgcontainer.children.length -1
    scrollto(count,item.parentElement.parentElement.querySelector('.img_container'))
    item.dataset.count = count
}))

rightbtn.map(item => item.addEventListener('click', () => {
    let count = item.previousElementSibling.dataset.count
    count < imgcontainer.children.length -1 ? count++ : count = 0
    scrollto(count,item.parentElement.parentElement.querySelector('.img_container'))
    item.previousElementSibling.dataset.count = count
}))






const btncont = Array.from(document.querySelectorAll('.good_contains_button'))
const paracont = Array.from(document.querySelectorAll('.good_contains_para'))


btncont.map((item,index,array) => item.addEventListener('click', () => {
    paracont[index].classList.toggle('pvisible')
}))



// leftbtn.addEventListener('click', () => {--count;scrollto(count)})
// rightbtn.addEventListener('click', () => {++count;scrollto(count)})