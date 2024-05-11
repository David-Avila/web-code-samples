
const samples = document.getElementsByClassName("SampleDiv");

for(let i = 0; i < samples.length; i++){
    window.setTimeout(function(){
        samples[i].classList.add("show");
    }, 200 * i);
}






function GoToGitHub(){
    window.open("https://github.com/David-Avila", "_blank");
}

function GoToLinkedIn(){
    window.open("https://www.linkedin.com/in/david-avila-duran-12568a222", "_blank");
}