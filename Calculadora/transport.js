const transportEmissions = {
    car: {
        gasoline: 1.92, // kg CO2 per km
        diesel: 1.20,
        electricity: 0.71,
        hybrid: 1.20
    },
    motorcycle: {
        gasoline: 0.09,
        electricity: 0.71
    },
    bus: {
        diesel: 4.50,
        electricity: 3.00,
        hybrid: 2.50
    }
};

function calculateTransportEmissions(vehicleType, fuelType, distance) {
    if (!vehicleType || !fuelType || !distance) {
        return 0;
    }

    const vehicleEmissions = transportEmissions[vehicleType];
    if (!vehicleEmissions || !vehicleEmissions[fuelType]) {
        return 0;
    }

    const total = vehicleEmissions[fuelType] * distance;
    updateTransportTotal(total); // Update the display with the calculated result
    return total;
}

function updateTransportTotal(total) {
    // Ensure that you update the transport total display element
    const transportTotalValue = document.querySelector('.transport-total-value');
    if (transportTotalValue) {
        transportTotalValue.textContent = `${total.toFixed(2)} kg CO2`;
    }
}

function updateFuelOptions() {
    const vehicleType = document.getElementById('vehicle-type').value;
    const fuelTypeSelect = document.getElementById('fuel-type');
    const availableFuels = vehicleType ? Object.keys(transportEmissions[vehicleType]) : [];

    fuelTypeSelect.innerHTML = '<option value="">Select fuel type</option>';
    availableFuels.forEach(fuel => {
        const option = document.createElement('option');
        option.value = fuel;
        option.textContent = fuel.charAt(0).toUpperCase() + fuel.slice(1);
        fuelTypeSelect.appendChild(option);
    });
}

// Add event listener for the Calculate button
document.getElementById('transport-calculate').addEventListener('click', function () {
    const vehicleType = document.getElementById('vehicle-type').value;
    const fuelType = document.getElementById('fuel-type').value;
    const distance = parseFloat(document.getElementById('distance').value);

    // Call the calculate function when the button is clicked
    calculateTransportEmissions(vehicleType, fuelType, distance);
});

// Optional: Automatically update fuel options when vehicle type is selected
document.getElementById('vehicle-type').addEventListener('change', updateFuelOptions);
