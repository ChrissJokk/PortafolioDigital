const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/*Fix*/
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


//function click_menu() {  
//     const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         // console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));
//}  