const submitBtn = document.querySelector(".btn")
const questions = document.querySelectorAll(".question")
const right = document.querySelector(".arrow .right")
const left = document.querySelector(".arrow .left")
const heading = document.querySelector(".up h1")
const heading2 = document.querySelector(".up .heading2 p")
const icon = document.querySelectorAll(".up img")
const iconLeft = document.querySelectorAll(".up nav .left img")
const line = document.querySelector(".down .line")

const starContainer = document.getElementById("stars-container");

function createStar(number) {
    for (let i = 0; i < number; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Random size (1px to 4px)
        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.top = `${Math.random() * 80}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Random animation delay for twinkle effect
        star.style.animationDelay = `${Math.random() * 1}s`;

        starContainer.appendChild(star);
    }
}


function createStars(number) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxRadius = Math.min(centerX, centerY) * 0.7; // Control the ring size

    for (let i = 0; i < number; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Generate stars with denser distribution towards the center using polar coordinates
        const angle = Math.random() * 2 * Math.PI; // Random angle (0 to 360 degrees)
        const radius = Math.sqrt(Math.random()) * maxRadius; // Square root for density effect

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${Math.random() * 0.5}s`;

        starContainer.appendChild(star);
    }
}

// gsap.to(starContainer, {
//     rotate: 360,
//     duration: 80,
//     repeat: -1,
//     ease: "linear",
// })


createStar(200)
createStars(500);

gsap.from(heading, {
    scale: 0,
    duration: 4,
    ease: "none",
    // opacity : 0
})

gsap.from(heading2, {
    y: 30,
    duration: 1,
    delay: 3,

})

gsap.to(icon, {
    rotate: 360,
    duration: 5,
    repeat: -1,
    ease: "linear",
})

gsap.to(iconLeft, {
    rotate: -360,
    duration: 7,
    repeat: -1,
    ease: "linear"

})

gsap.from(line, {
    width: 0,
    duration: 2,
    delay: 5
})




position = 0;
right.addEventListener("click", () => {
    console.log("position up bahar " + position )
    if(position-330 > -330*8){
        position -= 330;
        gsap.to(questions , {
            x : position,
            duration : 1
        })
        console.log(position)
    }
});

left.addEventListener("click", () => {
    // position += 332;
    console.log("position down bahar " + position )
    if(position+330 <= 0){
        position += 330;
        gsap.to(questions , {
            x : position,
            duration : 1
        })
        console.log(position)
    }
});