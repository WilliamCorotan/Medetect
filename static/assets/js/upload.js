document.addEventListener("DOMContentLoaded", function (event) {
  console.log("me here ready >>>");

  const fileUpload = document.querySelector("#upload-form #image");
  const imagePreview = document.querySelector("#image-preview");
  const imageLabel = document.querySelector("#image-label");
  const submit = document.querySelector("#upload-next");
  const partone = document.querySelector("#upload-form-one");
  const parttwo = document.querySelector("#upload-form-two");

  fileUpload.addEventListener("change", function (event) {
    const file = event.target.files?.[0];
    if (file) {
      imagePreview.src = URL.createObjectURL(file);
      imagePreview.classList.remove("hidden");
      imagePreview.classList.add("cursor-pointer");
      imageLabel.classList.add("hidden");
      submit.classList.remove("hidden");
    }
  });

  imagePreview.addEventListener("click", function (event) {
    fileUpload.click();
  });

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("me here submit >>>");
    partone.classList.add("hidden");
    parttwo.classList.remove("hidden");
  });

  function changeTab(event) {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");

    // border-b-secondary border-b-4

    // Remove the active utility classes from all tabs (bg-white, text-blue-600)
    // And hide all tab content (with the "hidden" utility)
    for (const i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("text-blue-600");
      tabButtons[i].classList.remove("bg-white");
      tabButtons[i].classList.add("text-white");
      tabPanels[i].classList.add("hidden");
    }

    // Add the active utility classes to the currently active tab (bg-white, text-blue-600)
    // And show the current tab content (remove the "hidden" utility)
    tabButtons[index].classList.remove("text-white");
    tabButtons[index].classList.add("text-blue-600");
    tabButtons[index].classList.add("bg-white");
    tabPanels[index].classList.remove("hidden");
  }
});
