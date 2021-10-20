function addingEventListener() {
    const objectEvent = document.getElementById('input');
    console.log(objectEvent);
    objectEvent.addEventListener('click', function(){
        alert('I was Clicked!');
    })
}

addingEventListener("input")