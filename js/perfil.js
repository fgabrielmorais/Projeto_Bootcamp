
let nav_option = document.querySelectorAll('.nav ul li');


nav_option.forEach((opt) => {
    opt.onclick = () => {
        nav_option.forEach((subcontent) => {
            subcontent.classList.remove("active_nav")
        })
        opt.classList.add("active_nav");
    }
});


function tabs(panelIndex){
    let tabBtn = document.querySelectorAll('.nav ul li');
    let tab = document.querySelectorAll('.tab');


    
    tab.forEach(function(node){
        node.style.display = 'none';
    });

    tab[panelIndex].style.display = 'block';
}

tabs(0);



