//Visiter Counter App
const visiterLink = document.getElementById('visiter-link');
const visiterCount = document.getElementById('visiter-count');
let count = 0;
visiterLink.addEventListener('click', () => {
  count++;
  updatevisiterCount();
});
function updatevisiterCount() {
  visiterCount.textContent = `${count} visiters`;
}

// Submit form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const feedbackMessage = document.createElement('p');
  feedbackMessage.textContent = 'Feedback submitted!';
  feedbackMessage.style.color = 'green';
  contactForm.parentNode.insertBefore(feedbackMessage, contactForm.nextSibling);
  contactForm.reset();
});

// selecting destination
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      cards.forEach((c, i) => {
        if (i === index) {
          c.classList.add("selected");
        } else {
          c.classList.remove("selected");
        }
      });
    });
  });
  const confirmButton = document.getElementById("confirm-button");
  confirmButton.addEventListener("click", () => {
    const selectedCard = document.querySelector(".card.selected");
    if (selectedCard) {
      const selectedDestination = selectedCard.querySelector("h2").textContent;
      alert(`You have selected: ${selectedDestination}`);
      window.location.href = "book.html";
    } else {
      alert("Please select a destination.");
    }
  });
});
