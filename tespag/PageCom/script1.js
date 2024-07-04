document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const contentContainer = document.getElementById("content");

    toggle.addEventListener("change", function() {
        if (toggle.checked) {
            fetch("page2.html")
                .then(response => response.text())
                .then(html => {
                    contentContainer.innerHTML = html;
                    // Optionally, you might want to include script execution here if necessary
                })
                .catch(error => console.error('Error fetching page2.html', error));
        } else {
            // Clear content if toggle is off
            contentContainer.innerHTML = '';
        }
    });
});
