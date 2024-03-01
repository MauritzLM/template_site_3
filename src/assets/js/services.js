// on button click run function with step number
// function changes source of picture img
const step_details = {
    1: 'In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet',
    2: ' Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Tincidunt id aliquet risus feugiat. Mi proin sed libero enim sed.',
    3: 'At in tellus integer feugiat scelerisque varius morbi enim. Pellentesque nec nam aliquam sem.'
}

const buttons_arr = document.querySelectorAll(".step-selection button");
const step_image = document.querySelector(".step-display img");
const step_text = document.querySelector(".step-display p");

for (let i = 0; i < buttons_arr.length; i++) {
    buttons_arr[i].addEventListener('click', () => {
        // remove active class from other buttons
        switch (i) {
            case 0:
                buttons_arr[1].classList.remove("cs-active");
                buttons_arr[2].classList.remove("cs-active");
                step_image.alt = "meeting";
                break;
            case 1:
                buttons_arr[0].classList.remove("cs-active");
                buttons_arr[2].classList.remove("cs-active");
                step_image.alt = "building";
                break;
            case 2:
                buttons_arr[0].classList.remove("cs-active");
                buttons_arr[1].classList.remove("cs-active");
                step_image.alt = "finished product";
                break;
        }
        // add active class to seleted button
        buttons_arr[i].classList.add("cs-active");
        // change src of image
        step_image.src = `/assets/images/step${i + 1}.webp`;
        step_text.textContent = step_details[i + 1];
    });
};