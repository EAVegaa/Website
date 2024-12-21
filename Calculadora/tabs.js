function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const calculators = document.querySelectorAll('.calculator');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected calculator
            calculators.forEach(calc => {
                calc.classList.remove('active');
                if (calc.id === `${tabName}-calculator`) {
                    calc.classList.add('active');
                }
            });
        });
    });
}

// Wait for the DOM to load before initializing tabs
document.addEventListener('DOMContentLoaded', initializeTabs);
