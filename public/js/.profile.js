$('.nav ul li').click(function() {
    $(this).addClass("active").siblings().removeClass('active');
})



const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelector('.tab');

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.display + 'none';
    });
    tabs[panelIndex].style.display = 'block';
}
tabs(0);

let bio = document.querySelector('.bio');

function bioText() {
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0, 100) + "...";
    bio.innerHTML += "&nbsp;" = <span onclick='addLength()' id='see-more-bio'>See More</span>
}
bioText()

function addLength() {
    bio.innerHTML = bio.oldText;
    bio.innerHTML += "&nbsp;" = <span onclick='bioText()' id='see-more-bio'>See More</span>
}