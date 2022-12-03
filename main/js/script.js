const nav = Array.from(document.querySelectorAll(".navigation"))


const slider = document.querySelector('.slider_cont')
const arrPhoto = ["./img/photoslider1.jpg","./img/photoslider2.jpg","./img/photoslider3.jpg"];
let count = 0;

for(let i = 0; i < arrPhoto.length; i++){
    const div = document.createElement('div')
    div.classList.add('divBlock')
    div.style.backgroundImage = `url(${arrPhoto[i]})`
    slider.append(div)
}


const sidescroll = (countCard) => {
   const widthPict = slider.children[0].clientWidth 
   slider.scroll({top:0,left:widthPict* countCard,behavior:"smooth"})
}

setInterval(() => {
sidescroll(count)
count < arrPhoto.length - 1 ? count++ : count = 0
},3000)



window.addEventListener('click', (event) => {
if(!event.target.classList.contains('navigation')){
   Array.from(document.querySelectorAll('.sub_menu')).map(item => item.classList.remove('sub_menu--active')) 
} else{
    nav.map(item => item.querySelector('.sub_menu').classList.remove('sub_menu--active'))
    event.target.querySelector('.sub_menu').classList.add('sub_menu--active')
}
})

