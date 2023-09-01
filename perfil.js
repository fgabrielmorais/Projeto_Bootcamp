
let nav_option = document.querySelectorAll('.nav ul li');

nav_option.forEach((opt) => {
    opt.onclick = () => {
        nav_option.forEach((subcontent) => {
            subcontent.classList.remove("active_nav")
        })
        opt.classList.add("active_nav");
    }
});

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = "none";
    });

    tab[panelIndex].style.display = "block";
};

tabs(0);





// let bio = document.querySelector('.bio');

// function bioText(){
//     bio.innerText = bio.innerText.substring(0, 100) + "...";
//     bio.innerHTML += "&nbsp;" + '<span onclick="addLength()" id="see-more-bio"> SeeMore</span>';

// }