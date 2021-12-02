const menu = document.querySelector('#hamburger');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('.nav-link');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

const info = [
    {
        id: 1,
        img: "./images/desktop-image-hero-1.jpg",
        heading: 'Discover innovative ways to decorate',
        product: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." ,
    },

   {
        id: 2,
        img: "./images/desktop-image-hero-2.jpg",
        heading: 'We are available all across the globe',
        product: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." ,
    },

    {   
        id: 3,
        img: "./images/desktop-image-hero-3.jpg",
        heading: 'Manufactured with the best materials',
        product: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const heading = document.querySelector('.about-us h1');
const image = document.querySelector('.bg');
const productInfo = document.querySelector('.about-us p')
const prevBtn = [...document.querySelectorAll('.prev-btn')]
const nextBtn = [...document.querySelectorAll('.next-btn')]

//Set starting point
let currentItem = 0;

//Add event listener to the window that implies when the document loads
window.addEventListener('DOMContentLoaded', () => {
    console.log('Hellooooo world');
    showNext(currentItem)
})

//show details based on items
function showNext (each) {
    const item = info[each];  //variable of each item index info[0]
    image.src = item.img;
    heading.textContent = item.heading;
    productInfo.textContent = item.product;
}

// show next item

nextBtn.forEach( (next) => {
    next.addEventListener('click', () =>{
        currentItem++;
        if (currentItem > info.length - 1) {     //when your current item (num of clicks) gets bigger than array lenght, there'll be an error cos no item will be found, then you have to minus 1 from your arrays lenght bacause the lenght will be greater than the index, number starts from 0!  
            currentItem = 0;
        }
        showNext(currentItem)
    })
})

prevBtn.forEach( (prev) => {
    prev.addEventListener('click', () =>{
        currentItem++;
        if (currentItem > info.length - 1) {     //when your current item (num of clicks) gets bigger than array lenght, there'll be an error cos no item will be found, then you have to minus 1 from your arrays lenght bacause the lenght will be greater than the index, number starts from 0!  
            currentItem = 0;
        }
        showNext(currentItem)
    })
})

