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

    closeReviewForm();
}