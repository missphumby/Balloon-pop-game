var greetings = prompt('Enter Your name please');
document.querySelector('#greeting').innerHTML =  "Good evening " + greetings



let popped = 0
// let balloon = document.querySelectorAll('.balloon');

document.addEventListener('mouseover', function(e){
if(e.target.classList.contains('balloon')){
    e.target.style.backgroundColor = "gainsboro";
    e.target.textContent = "POP!";
    popped++;
    removeEvent(e)
    noMoreBalloons()
}

});

function removeEvent(e){
e.target.removeEventListener('mouseover', function(){

})
};

function noMoreBalloons(){
    let message = document.querySelector('#yay-no-balloons');
    let gallery = document.querySelector('#balloon-gallery')
    if (popped === 24){
message.style.display = "block";
gallery.style.display = "none"
    }
}