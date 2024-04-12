function openReviewForm(brandName) {
    document.getElementById("brandName").value = brandName;
    document.getElementById("reviewModal").style.display = "block";

    openReviewForm()
}

function closeReviewForm() {
    document.getElementById("reviewModal").style.display = "none;
}

//handling submit review form
// Get the form element
const form = document.getElementById('submit');

// Add event listener for the form submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);
    
    // Perform form validation or data processing
    // For example, you can access form fields using formData.get('fieldName')

    // Log form data to console
    console.log('Form submitted:', formData);

    
});


postReview(reviewObject)
// Fetch requests
function getBrandReviews(){
    fetch("http://localhost:3000/reviews")
     .then(response => response.json())
     .then(data => {console.log(data);});
}
//POST Request
function postReview(reviewObject) {
    fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObject)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}