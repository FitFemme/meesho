document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            fullname: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            address2: document.getElementById('address2').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            payment: document.getElementById('payment').value,
        };

        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to the confirmation page
        window.location.href = 'confirmation.html';
    });
});
