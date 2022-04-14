let container;
let animationCount = 0;
let animationRect;

function initRects() {
    for (let i = 0; i < 26; i++) {
        let rectCluster = document.createElement("div");
        rectCluster.classList.toggle("rect-cluster");
        for (let j = 0; j < 4; j++) {
            let rect = document.createElement("section");
            rectCluster.appendChild(rect);
            rect.addEventListener("click", (event) => { 
                if (event.target.id === "selected-rect")
                    event.target.setAttribute("id", "");
                else event.target.setAttribute("id", "selected-rect");
            });
        }
        container.appendChild(rectCluster);
    }
}

function animate() {
    animationRect.setAttribute("id", "animation-rect");
    switch (animationCount) {
        case 0:
            animationRect.setAttribute("id", "animation-rect");
            animationCount++;
            break;
        case 1:
            animationRect.style.opacity = 0.9;
            animationCount++;
            break;
        case 2:
            animationRect.style.opacity = 0.8;
            animationCount++;
            break;
        case 3:
            animationRect.style.opacity = 0.7;
            animationCount++;
            break;
        case 4:
            animationRect.style.opacity = 0.6;
            animationCount++;
            break;
        case 5:
            animationRect.style.opacity = 0.5;
            animationCount++;
            break;
        case 6:
            animationRect.style.opacity = 0.4;
            animationCount++;
            break;
        case 7:
            animationRect.style.opacity = 0.3;
            animationCount++;
            break;
        case 8: 
            animationRect.style.opacity = 0.2;
            animationCount++;
            break;
        case 9:
            animationRect.style.opacity = 0.1;
            animationCount++;
            break;
        case 10:
            animationRect.setAttribute("id", "");
            animationCount = 0;
            break;
        default:
            break;
    }
}

window.onload = () => {
    container = document.getElementById("layout3-content-container");
    initRects();
    animationRect = container.firstElementChild.firstElementChild;
    
    let plus = document.getElementById("plus-button");
    plus.addEventListener("click", animate);
}


