const toggleButton = document.getElementById("markAsReadBtn");

toggleButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".notications__list--item");
  const paragraphs = document.querySelectorAll(".unread-noticiations-icon");

  // Loop through each item and remove specified classes
  items.forEach((item) => {
    item.classList.remove("unread-noticiations");
  });
  paragraphs.forEach((item) => {
    item.classList.remove("unread-noticiations-icon");
  });
});
