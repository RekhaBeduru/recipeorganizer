document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const instructionsList = document.querySelector('.instructions');

    toggleBtn.addEventListener('click', function() {
        if (instructionsList.style.display === 'none' || instructionsList.style.display === '') {
            instructionsList.style.display = 'block';
            toggleBtn.textContent = 'Hide Instructions';
        } else {
            instructionsList.style.display = 'none';
            toggleBtn.textContent = 'Show Instructions';
        }
    });
});
