const section = document.querySelectorAll('section');
window.onscroll = () =>{
    section.forEach(sect =>{
        let top = window.scroliv;
        let offset = sect.offsetTop;
        let height = sect.offsetHeight;

        if(top >= offset && top < offset + height){
            sect.classList.add('show-animate');
        }
        else{
            sect.classList.add('show-animate')
        }
    })
}