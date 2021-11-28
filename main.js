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
    img: "./images/mobile-image-hero-2.jpg",
    heading: 'We are available all across the globe',
    productInfo: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." ,
},

{
    img: "./images/mobile-image-hero-2.jpg",
    heading: 'Manufactured with the best materials',
    productInfo: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

}
]