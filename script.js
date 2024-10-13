document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;

    // Create a new news article element
    const article = document.createElement("div");
    article.classList.add("news-article");
    
    // Add content to the news article
    article.innerHTML = `
        <h2>${title}</h2>
        <p><strong>${date}</strong></p>
        <img src="${image}" alt="${title}" style="max-width: 100%; height: auto;">
        <p>${description}</p>
    `;

    // Append the new article to the news container
    document.getElementById("news-container").prepend(article);

    // Clear the form fields
    document.getElementById("news-form").reset();
});
