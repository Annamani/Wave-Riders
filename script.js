const book_lesson=document.getElementsByClassName('lesson_btn')[0];
book_lesson.addEventListener("click",()=>{
       alert('You have booked the lesson');
})

const contact_button=document.getElementsByClassName('contact_btn')[0];
contact_button.addEventListener("click",()=>{
    alert('Thanks for contacting us. We will get back to you soon!');
})

// const back_image=document.getElementsByClassName('background_img')[0];
// back_image.style.backgroundImage="url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')";
// back_image.style.backgroundSize="cover";
// back_image.style.height="400px";
// back_image.style.width="100%";
// back_image.setAttribute("alt","waves image");


// const menu_icon=document.getElementsByClassName('mobile_menu_icon')[0];
// const nav_links=document.getElementsByClassName('mobile_nav_links')[0];
// const navbar=document.getElementsByClassName('navbar-desktop')[0];

// menu_icon.addEventListener("click",()=>{
//     nav_links.classList.toggle('active');
//     nav_links.style.display="flex";
//     nav_links.style.flexDirection="column";
//     nav_links.style.justifyContent="center";
//     nav_links.style.alignItems="center";
//     nav_links.style.textAlign="center";
//     nav_links.style.height="100%";
//     nav_links.style.width="100%";
//     navbar.style.flexDirection="column";
//     menu_icon.style.display="none";
// })


function toggleMenu() {
    const mobileLinks = document.querySelector('.mobile_nav_links');
    mobileLinks.classList.toggle('active');
    const menuIcon = document.querySelector('.mobile_menu_icon');   
    if (mobileLinks.classList.contains('active')) {
        menuIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
    }
}