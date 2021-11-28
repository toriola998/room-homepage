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
        img: "./images/mobile-image-hero-1.jpg",
        heading: 'Discover innovative ways to decorate',
        product: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." ,
    },

   {
    id: 2,
    img: "./images/mobile-image-hero-2.jpg",
    heading: 'We are available all across the globe',
    product: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." ,
},

{   
    id: 3,
    img: "./images/mobile-image-hero-3.jpg",
    heading: 'Manufactured with the best materials',
    product: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

}
]

const heading = document.querySelector('.about-us h1');
const image = document.querySelector('.bg');
const productInfo = document.querySelector('.about-us p')
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn')

//Set starting point
let currentItem = 0;

//Add event listener to the window that implies when the document loads
window.addEventListener('DOMContentLoaded', () => {
    console.log('Hellooooo world');
    showNext(currentItem)
})

function showNext (each) {
    const item = info[each]; 
    image.src = item.img;
    heading.textContent = item.heading;
    productInfo.textContent = item.product;
}

nextBtn.addEventListener('click', () =>{
    currentItem++;
    if (currentItem > info.length - 1) {
        currentItem = 0;
    }
    showNext(currentItem)
})

prevBtn.addEventListener('click', () =>{
    currentItem--;
    if (currentItem > 0) {
        currentItem = info.lenght - 1;
    }
    showNext(currentItem)
})