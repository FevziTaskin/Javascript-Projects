function animatedForm () {
    const arrows = document.querySelectorAll(".fa-arrow-down")

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            // Check for Validation
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm)
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm)
            } else if( input.type === "password" && validateUser(input)){
                nextSlide(parent, nextForm)
            }else {
                parent.style.animation = "shake 0.5s ease"
            }
            // get rid of animation
            parent.addEventListener('animationend' , () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
   if(user.value.length < 6){
        console.log('not enough characters');
        error('rgb(189,87,87)');
   } else {
        error('rgb(87,149,130)')
        return true;
   }
}

function validateEmail (email) {
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validation.test(email.value)){
        error('rgb(87,149,130)')
        return true;
    } else {
        error('rgb(189,87,87)');

    }
}

function error(color) {
    document.body.style.backgroundColor= color
}

function nextSlide (parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();