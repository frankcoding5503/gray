
window.addEventListener("scroll", ()=>{
    let headcard = document.getElementById("headcard");
    let offset = window.pageYOffset;
    
    headcard.style.top = offset * 0.1 + 20 + "vh";
})

const btn_nextCat = document.getElementById('btn-nextCat');
const btn_prevCat = document.getElementById('btn-prevCat');

const allDivInContainer = document.querySelectorAll('.slider-container .slider-cat');
for(let i = 0; i < allDivInContainer.length; i++) document.getElementById("DotContainer").innerHTML += '<div class="dot"></div>';

const allDotInContainer = document.querySelectorAll('.dot-container .dot');
allDotInContainer[0].style.backgroundColor = "gray";

let index = 0;
btn_nextCat.addEventListener("click", function(){
    if(index == allDivInContainer.length - 1) index = -1;

    allDivInContainer[++index].scrollIntoView({behavior: "smooth"});
    allDotInContainer[index].style.backgroundColor = "gray";
    allDotInContainer[index - 1 == -1 ? allDotInContainer.length - 1 : index - 1].style.backgroundColor = "lightgray";
});
btn_prevCat.addEventListener("click", function(){
    if(index == 0) index = allDivInContainer.length;
    
    allDivInContainer[--index].scrollIntoView({behavior: "smooth"});
    allDotInContainer[index].style.backgroundColor = "gray";
    allDotInContainer[index + 1 == allDotInContainer.length ? 0 : index + 1].style.backgroundColor = "lightgray";
});

// const deadline = new Date("december 31, 2022 00:00:00");
// const dayBlock = document.getElementById('dayBlock');
// const hourBlock = document.getElementById('hourBlock');
// const minBlock = document.getElementById('minBlock');
// const secBlock = document.getElementById('secBlock');

// let interval = setInterval(() => {
//     const currentTime = new Date();
//     const difference = deadline - currentTime;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     dayBlock.innerHTML = `<h4>day</h4><h4>${days}</h4>`;
//     hourBlock.innerHTML = `<h4>hr</h4><h4>${hours}</h4>`;
//     minBlock.innerHTML = `<h4>min</h4><h4>${minutes}</h4>`;
//     secBlock.innerHTML = `<h4>sec</h4><h4>${seconds}</h4>`;
// }, 1000)

const btn_nextCard = document.getElementById('nextCard');
const btn_prevCard = document.getElementById('prevCard');
const card1 = document.getElementById('act-1');
const card2 = document.getElementById('act-2');
const card3 = document.getElementById('act-3');

let cardDeck = [card3, card2, card1];
const lastIndex = cardDeck.length - 1;

card1.style.zIndex = 2;
card2.style.zIndex = 1;
card3.style.zIndex = 0;

btn_nextCard.addEventListener("mouseover", function(){
    cardDeck[lastIndex].style.transformOrigin = "20% 100%";
    cardDeck[lastIndex].style.transform = "rotate(-5deg)";
});
btn_nextCard.addEventListener("mouseleave", function(){
    cardDeck[lastIndex].style.transform = "rotate(0deg)";
});
btn_prevCard.addEventListener("mouseover", function(){
    cardDeck[0].style.transformOrigin = "100% 20%";
    cardDeck[0].style.transform = "rotate(5deg)";

});
btn_prevCard.addEventListener("mouseleave", function(){
    cardDeck[0].style.transform = "rotate(0deg)";
});

btn_nextCard.addEventListener("click", function(){
    cardDeck[lastIndex].style.transformOrigin = "20% 100%";
    cardDeck[lastIndex].style.opacity = 0;
    cardDeck[lastIndex].style.transform = "translate(-25%, -25%)"

    const temp = cardDeck.pop();

    setTimeout(function(){
        cardDeck.unshift(temp);
        cardDeck.forEach(item => {
            item.style.zIndex = cardDeck.indexOf(item);
        });
        reposition(temp);
        cardDeck[0].style.opacity = 1;
    },500);
});

btn_prevCard.addEventListener("click", function(){
    cardDeck[0].style.transformOrigin = "100% 20%";
    cardDeck[0].style.opacity = 0;
    cardDeck[0].style.transform = "translate(-25%, -25%)";

    const temp = cardDeck.shift();

    setTimeout(function(){
        cardDeck.push(temp);
        cardDeck.forEach(item => {
            item.style.zIndex = cardDeck.indexOf(item);
        });
        reposition(temp);
        cardDeck[lastIndex].style.opacity = 1;
    },500);
});

function reposition(box) { box.style.transform = "rotate(0deg)"; }


