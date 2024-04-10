function openReviewForm(brandName) {
    document.getElementById("brandName").value = brandName;
    document.getElementById("reviewModal").style.display = "block";
}

function closeReviewForm() {
    document.getElementById("reviewModal").style.display = "none";
}

function submitReview(event) {
    event.preventDefault();


    const brandName = document.getElementById("brandName").value;
    const username = document.getElementById("username").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const reviewMessage = `Thank you, ${username}, for your review of ${brandName}.\nRating: ${rating}\nComment: ${comment}`;
    alert(reviewMessage);

    alert("Thank you for your review!")

    closeReviewForm();
   
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form data
    const brandName = document.getElementById("brandName").value;
    const username = document.getElementById("username").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    // Create review object
    const reviewObject = {
        brandName: brandName,
        username: username,
        rating: rating,
        comment: comment
    };

    // Call postReview function to submit review data
    postReview(reviewObject);
}

// Attach submit event listener to the form
document.getElementById("reviewForm").addEventListener("submit", handleSubmit);


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