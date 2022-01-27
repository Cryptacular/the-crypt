let style = [
  "color: #ddd",
  "background-color: #222",
  "padding: 2px 4px",
  "border-radius: 2px",
].join(";");

console.log("%c============ Nice to see you here ;) ============", style);

(() => {
  const emailLink = document.getElementById("emailLink");
  emailLink.addEventListener("mouseenter", (el, ev) => {
    el.target.href = "mailto:nick@thecrypt.co.nz";
  });

  emailLink.addEventListener("mouseleave", (el, ev) => {
    el.target.href = "#";
  });
})();

(() => {
  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;

  const setBackgroundColour = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const secondsSinceMidnight =
      hours * secondsInHour + minutes * secondsInMinute + seconds;

    const hue = ((secondsSinceMidnight / secondsInDay) * 360).toFixed(2);
    const saturation = 37;
    const luminosity = 62;

    const colour = `hsl(${hue}deg ${saturation}% ${luminosity}%)`;
    const body = document.getElementsByClassName("main")[0];
    body.style = `background-color: ${colour};`;
    body.classList.add("loaded");

    console.log(secondsSinceMidnight);
    console.log(colour);
  };

  setInterval(setBackgroundColour, 5000);
  setBackgroundColour();
})();
