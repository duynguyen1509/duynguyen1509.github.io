const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on November 1st!";
  gif.src =
    // "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    "https://media1.giphy.com/media/7702jh3NsloOseiDUk/giphy.webp?cid=6c09b952nnwrtkam3ack51sjlfp2dn75rq441whntbg6a8st&ep=v1_internal_gif_by_id&rid=giphy.webp&ct=g";
     // Create "Save the Date" link
    const saveDateLink = document.createElement("a");
    saveDateLink.href = "https://duynguyen1509.github.io/trick-or-treat/Halloween Party yayyyy.ics"; // Link to hosted .ics file
    saveDateLink.download = "Halloween Party yayyyy.ics"; // File name for download
    saveDateLink.innerText = "Save the Date to Your Calendar";
    saveDateLink.style.display = "block"; // Ensure it appears on a new line
    saveDateLink.style.marginTop = "10px";
    saveDateLink.classList.add("save-date-link"); // Add the class here

    // Append the link to the wrapper
    question.appendChild(saveDateLink);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});