const advanceButtons = document.querySelectorAll('.advance-button');

advanceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentStep = document.querySelector('.step.active');
        const nextId = 'step-' + button.getAttribute('data-step');

        currentStep.classList.remove('active');
        const nextStep = document.getElementById(nextId);
        if (nextStep) {
            nextStep.classList.add('active');
        }
    });
});
