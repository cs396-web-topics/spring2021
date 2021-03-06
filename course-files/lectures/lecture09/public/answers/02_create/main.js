const processSave = ev => {
    const data = {
        name: document.getElementById('name').value,
        genres: document.getElementById('genres').value.split(','),
        spotify_id: document.getElementById('spotify_id').value,
        image_url: document.getElementById('image_url').value
    }
    fetch('/artists', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                // send to catch block:
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(err => {
            console.error(err);
            alert('Error!');
        });
    ev.preventDefault();
};

document.querySelector('button').onclick = processSave;