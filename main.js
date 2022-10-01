//local reviews data

const reveiws =[
    {
    id: 1,
    img:"img/p1.jpg",
    name:"Sara jhon",
    job:"UX Designer",
    info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis quo nihil ducimus, laudantium rerum eligendi reiciendis voluptatibus odit vitae!"
    },
    {
        id: 2,
        img:"img/p2.jpg",
        name:"Jhon Doe",
        job:"WEB Developer",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis quo nihil ducimus, laudantium rerum eligendi reiciendis voluptatibus odit vitae!"
        },
        {
        id: 3,
        img:"img/p3.jpg",
        name:"Alex",
        job:"UI Designer",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis quo nihil ducimus, laudantium rerum eligendi reiciendis voluptatibus odit vitae!"
        },
        {
        id: 4,
        img:"img/p4.jpg",
        name:"Robart",
        job:"WordPress Expart",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis quo nihil ducimus, laudantium rerum eligendi reiciendis voluptatibus odit vitae!"
        }
]
//select items
const img = document.querySelector('.image')
console.log(img.src)
const author = document.querySelector('.author')
const job = document.querySelector('.job')
const info = document.querySelector('.info')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

//set current item
let currentItem = 0;

//load initail item
window.addEventListener('DOMContentLoaded', function (){
    showReviews(currentItem)
})

function showReviews(currentItem){
    const item = reveiws[currentItem];
    img.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    info.innerText = item.info;
}

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reveiws.length -1;
    }
    showReviews(currentItem)
})

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reveiws.length -1){
        currentItem = 0;
    }
    showReviews(currentItem)
})
