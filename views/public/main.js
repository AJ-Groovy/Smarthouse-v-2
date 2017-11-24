let devices = [].slice.call(document.querySelectorAll('.item'));

let toggle = (e) => {

    e.preventDefault();

    let itemElement = this.closest('.item'),
        item = {
            id: itemElement.getAttribute('id');
        };

    fetch('/devices/', {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(item)
    });

}

devices.addEventListener('click', toggle(e));