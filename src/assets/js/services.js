// on button click run function with step number
// function changes source of picture img

const buttons_arr = document.querySelectorAll(".step-selection div button");
const step_image = document.querySelector(".step-display img");

for(let i = 0; i < buttons_arr.length; i++) {
    buttons_arr[i].addEventListener('click', () => {
        // change src of image
        console.log(step_image);
        step_image.src = `/assets/images/step${i+1}.webp`
    });
};