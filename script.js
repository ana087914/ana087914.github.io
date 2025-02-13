window.addEventListener("scroll", () => {
    const scrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const colorValue = Math.min(255, Math.floor(scrollPercentage * 255));
  
    document.body.style.backgroundColor = `rgb(${255 - colorValue}, ${
      255 - colorValue
    }, ${255 - colorValue})`;
    document.body.style.color = colorValue > 150 ? "white" : "black";
  });
  
  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const quantity = 40; // Crește numărul de licurici
    const container = document.querySelector(".fireflies-container");
  
    for (let i = 0; i < quantity; i++) {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
  
      // Poziție inițială random
      firefly.style.left = Math.random() * 100 + "vw";
      firefly.style.top = Math.random() * 100 + "vh";
  
      // Randomizare durată animație
      firefly.style.animationDuration = `${5 + Math.random() * 10}s`;
  
      container.appendChild(firefly);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("continue-button").addEventListener("click", function () {
        document.getElementById("information").scrollIntoView({ behavior: "smooth" });
    });
});
