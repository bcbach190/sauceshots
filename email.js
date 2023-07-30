const input = document.querySelector('.input-field');

function showSubmitButton() {
    const submit = document.querySelector('.submit-container');

    if (input.value.length >= 0) {
        submit.style.opacity = '1';
    } else {
        submit.style.opacity = '0';
    }
}

input.addEventListener('input', showSubmitButton);
