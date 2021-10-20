function addingEventListener() {
    const objectEvent = document.getElementById('input');
    objectEvent.addEventListener('click', function(){
        alert('I was Clicked!');
    })
}

addingEventListener("input")