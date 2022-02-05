const dot = document.getElementById("dot");
const triangles = document.querySelectorAll("svg");

const main = document.getElementsByClassName("main")[0];

dot.addEventListener("click", () => {
  for (let i = 0; i < triangles.length; i++) {
    triangles[i].classList.add("darken");
    setTimeout(() => {
      triangles[i].classList.add("align-triangles");
      main.classList.remove("turning");

      setTimeout(() => {
          triangles[i].classList.add('removed');
      }, 500);
    }, 2500);
  }
  dot.classList.add("bigger");
  dot.classList.remove("hovered");
});

// window.addEventListener("mousemove", (e) => {
//     let x = e.screenX;
//     let y = e.screenY;

//     console.log(main.style.left);

//     main.style.left = x;
//     main.style.right = y;
// });
