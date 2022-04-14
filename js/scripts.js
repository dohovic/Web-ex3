let container;
let animationCount = 0;
let animationRect;
let animationImg;

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
    switch (animationCount) {
        case 0:
            animationImg = document.createElement("img");
            animationRect.setAttribute("id", "animation-rect");
            animationRect.appendChild(animationImg);
            animationImg.src = "../images/mario/frame1.png";
            animationCount++;
            break;
        case 1:
            animationImg.src = "../images/mario/frame2.png";
            animationCount++;
            break;
        case 2:
            animationImg.src = "../images/mario/frame3.png";
            animationCount++;
            break;
        case 3:
            animationImg.src = "../images/mario/frame4.png";
            animationCount++;
            break;
        case 4:
            animationImg.src = "../images/mario/frame5.png";
            animationCount++;
            break;
        case 5:
            animationImg.src = "../images/mario/frame6.png";
            animationCount++;
            break;
        case 6:
            animationImg.src = "../images/mario/frame5.png";
            animationCount++;
            break;
        case 7:
            animationImg.src = "../images/mario/frame7.png";
            animationCount++;
            break;
        case 8: 
            animationImg.src = "../images/mario/frame8.png";
            animationCount++;
            break;
        case 9:
            animationImg.src = "../images/mario/frame9.png";
            animationCount++;
            break;
        case 10:
            animationImg.src = "../images/mario/frame10.png";
            animationCount++;
            break;
        case 11:
            animationRect.setAttribute("id", "");
            animationCount = 0;
            animationImg.remove();
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


