const advanceButtons = document.querySelectorAll('.advance-button');

advanceButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Encontra a etapa ATIVA atual (em inglês)
        const currentStep = document.querySelector('.step.active');
        
        // 2. Constrói o ID da próxima etapa usando 'step-' (em inglês)
        const nextId = 'step-' + button.getAttribute('data-step');

        // 3. Remove a classe 'active' da etapa atual
        if (currentStep) {
            currentStep.classList.remove('active');
        } else {
            console.error("Erro: Nenhuma etapa atual encontrada para remover a classe 'active'.");
        }
        
        // 4. Encontra a próxima etapa pelo ID
        const nextStep = document.getElementById(nextId);
        
        // 5. Adiciona a classe 'active' na próxima etapa, se ela existir
        if (nextStep) {
            nextStep.classList.add('active');
        } else {
            console.error("Erro: Próxima etapa não encontrada. ID procurado: " + nextId);
        }
    });
});
