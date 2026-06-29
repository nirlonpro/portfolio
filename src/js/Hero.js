const hero = document.querySelector(".hero");
const imageWrap = document.getElementById("imageWrap");
const image = document.getElementById("heroImage");

const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const bio = document.querySelector(".hero-bio");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
  if (!hero) return;

  const rect = hero.getBoundingClientRect();

  const total =
    hero.offsetHeight -
    window.innerHeight;

  target = Math.min(
    Math.max(-rect.top / total, 0),
    1
  );
});

function animate() {
  if (!imageWrap || !image) {
    requestAnimationFrame(animate);
    return;
  }

  current += (target - current) * 0.08;

  const eased =
    1 - Math.pow(1 - current, 3);

  const moveY =
    350 - eased * 350;

  const scale =
    0.25 + eased * 1.15;

  const rotateZ =
    -12 + eased * 12;

  const flipStart = 0.55;
  const flipEnd = 0.8;

  let rotateY = 0;
  let flipProgress = 0;

  if (current > flipStart) {
    flipProgress = Math.min(
      (current - flipStart) /
        (flipEnd - flipStart),
      1
    );

    rotateY = flipProgress * 180;
  }

  imageWrap.style.transform = `
    translateY(${moveY}px)
    scale(${scale})
    rotateZ(${rotateZ}deg)
    rotateY(${rotateY}deg)
  `;

  const gray =
    100 - flipProgress * 100;

  image.style.filter = `
    grayscale(${gray}%)
    brightness(1)
  `;

  const mirror = Math.cos(
    flipProgress * Math.PI
  );

  image.style.transform = `
    scaleX(${mirror})
  `;

  if (leftSide) {
    leftSide.style.transform = `
      translateY(calc(-50% - ${
        eased * 100
      }px))
    `;

    leftSide.style.opacity =
      1 - eased * 0.45;
  }

  if (rightSide) {
    rightSide.style.transform = `
      translateY(calc(-50% + ${
        eased * 100
      }px))
    `;

    rightSide.style.opacity =
      1 - eased * 0.45;
  }

  if (bio) {
    bio.style.opacity =
      Math.max(
        1 - current * 1.3,
        0
      );

    bio.style.transform = `
      translateX(-50%)
      translateY(${current * 80}px)
    `;
  }

  requestAnimationFrame(
    animate
  );
}

setTimeout(() => {
  const image =
    document.getElementById(
      "heroImage"
    );

  if (image) {
    image.style.transform =
      "scaleX(-1)";
    image.style.filter =
      "grayscale(100%)";
  }

  animate();
}, 100);