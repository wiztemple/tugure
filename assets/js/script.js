document.addEventListener(
  "DOMContentLoaded",
  () => {
    const navBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0,
    );
    if (navBurgers.length > 0) {
      navBurgers.forEach((element) => {
        element.addEventListener(
          "click",
          () => {
            const { target } = element.dataset;
            const targetId = document.getElementById(target);
            element.classList.toggle("active");
            targetId.classList.toggle("active");
          },
          null,
        );
      });
    }
  },
  null,
);
