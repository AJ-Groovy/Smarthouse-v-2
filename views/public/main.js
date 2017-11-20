let devices = [].slice.call(document.querySelectorAll('.item'));

let toggle = () => {


}

devices.addEventListener('click', toggle());

let nextChannel = () => {

    let xhr = new XMLHttpRequest;
    
    xhr.open('PUT', '/devices/');
    xhr.send();

    if(xhr.status == 200 && xhr.readyState == 4) {
        
    }
}