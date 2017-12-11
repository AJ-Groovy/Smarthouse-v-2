let devices = [].slice.call(document.querySelectorAll('.initiator'));

devices.forEach((item) => item.addEventListener('click', (e) => {

    let target = e.target;
    let itemElement = target.closest('.item'),
        item = {
            'id': itemElement.getAttribute('id'),
            'state' : itemElement.dataset.enabled
        };
    console.log(item);

    fetch(`/devices/${item.id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(item)
    })
    .then((res) => { 
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json(); })
    .then((json) => {   
        itemElement.dataset.enabled = json.state;        
    })
}));
