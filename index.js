/* Array of headlines for the video section */
// const videoHeadlines = [
//   "شركات جت بعدكم وتعدّتكم؟ الزبدة بالتسويق.",
//   "منتجك يستاهل يوصل للناس بقوة.",
//   "إحنا نساعدك تبيع وتستعيد مكانك.",
// ];
// let videoCurrentIndex = 0;
// const videoHeadlineElement = document.getElementById("video-headline");

/* Array of headlines for the home section */
// const headlines = [
//   "خلك قدام، لا تخلي غيرك يسبقك بالتسويق.",
//   "منتجك له قيمة؟ حنا نخليه يوصل للناس الصح.",
//   "معنا ما تبيع بس... تسترجع مركزك وتزيد مبيعاتك.",
// ];
// let currentIndex = 0;
// const headlineElement = document.getElementById("headline");

/* Function to change headlines */
// function changeHeadlines() {
//   headlineElement.textContent = headlines[currentIndex];
//   currentIndex = (currentIndex + 1) % headlines.length;

//   setTimeout(() => {
//     videoHeadlineElement.textContent = videoHeadlines[videoCurrentIndex];
//     videoCurrentIndex = (videoCurrentIndex + 1) % videoHeadlines.length;
//   }, 200); 
// }

/* Set initial headlines without immediate trigger */
// headlineElement.textContent = headlines[currentIndex];
// currentIndex = (currentIndex + 1) % headlines.length;
// videoHeadlineElement.textContent = videoHeadlines[videoCurrentIndex];
// videoCurrentIndex = (videoCurrentIndex + 1) % videoHeadlines.length;

/* Change headlines every 4 seconds to match CSS animation */
// setInterval(changeHeadlines, 4000);

/* Prevent form submission for demo purposes */
// document.querySelectorAll("form").forEach((form) => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("تم إرسال النموذج بنجاح!");
//   });
// });

/* Function to toggle the navigation menu */
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

const track = document.querySelector(".marquee-track");
const template = document.getElementById("clients-logos").content;
track.appendChild(template.cloneNode(true));
track.appendChild(template.cloneNode(true));
