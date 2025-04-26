let currentStep = 1;
let typedPassword = '';

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
    currentStep = step;
}

function nextStep() {
    showStep(currentStep + 1);
}

function choosePayment(type) {
    document.getElementById('cardType').textContent = type;
    nextStep();
}

function typePassword(num) {
    if (typedPassword.length < 6) {
        typedPassword += num;
        document.getElementById('passwordDots').textContent += '•';
    }
}

function clearPassword() {
    typedPassword = '';
    document.getElementById('passwordDots').textContent = '';
}

function confirmPassword() {
    if (typedPassword.length >= 4) {
        showStep(6);
        // Espera 20 segundos antes de mostrar o erro
        setTimeout(() => {
            document.getElementById('errorMessage').style.display = 'block';
        }, 20000);
    }
}

function revealPassword() {
    document.getElementById('revealedPassword').textContent = typedPassword;
    showStep(7);
}
