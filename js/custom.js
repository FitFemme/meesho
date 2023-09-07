// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

 // Get all elements with class "psize"
 const psizeElements = document.querySelectorAll('.psize');

 // Add a click event listener to each "psize" element
 psizeElements.forEach(element => {
   element.addEventListener('click', () => {
     // Remove the "active" class from all elements
     psizeElements.forEach(e => e.classList.remove('active'));

     // Add the "active" class to the clicked element
     element.classList.add('active');
   });
 });

 document.getElementById("buyNowButton").addEventListener("click", function () {
    // Get selected size
    const selectedSize = document.querySelector(".psize.active").textContent;

    // Get quantity
    const quantity = document.getElementById("quantityInput").value;

    // Calculate total amount
    const totalAmount = 210 * quantity;

    // Redirect to invoice page with parameters
    
    window.location.href = `invoice.html?size=${selectedSize}&quantity=${quantity}&total=${totalAmount}`;
});