//scroll to top button

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});
//modal window
const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

//programming languages array 
const languages = ["HTML-CSS", "JavaScript", "C#", "Ruby", "Python", "C++"];
let n = languages.length;
let text = "<ul>";
for (let i = 0; i < n; i++) {
    text += "<li>" + languages[i] + "</li>";
}
text += "</ul>";

document.getElementById("arr").innerHTML = text;

//languages switch
function myFunction() {
    var text;
    var languages = document.getElementById("inputlang").value;


    switch (languages) {
        case "English":
            text = "I am very good at this language";
            break;
        case "Bosnian":
            text = "This is my mothertongue";
            break;
        case "Turkish":
            text = "I am pretty good with Turkish";
            break;
        case "Mandarin":
            text = "I am alright with Mandarin";
            break;
        default:
            text = "I do not speak that language";



    }
    document.getElementById("lang").innerHTML = text;
}
//buton animation
$("button-6").click(function() {
    $("NavNav").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});
//logo animation
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

