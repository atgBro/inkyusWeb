const links = document.querySelectorAll("nav .link a");
const bubble = document.getElementsByClassName("bubbleLink")[0];
const equart = 0.5;

const moveBubble = (i) => {
    bubble.style.top = `${i * 100 / links.length}%`
}
bubble.style.top = `${equart * 100 / links.length}%`
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => moveBubble(i+equart))
    
}