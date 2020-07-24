function getDogImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResult(responseJson))
    .catch(error => alert('Network error'));
}

function displayResult(responseJson) {
    console.log(responseJson)
    if (responseJson.status === "error") {
        alert(responseJson.message)
    } else {
        $('.result-img').replaceWith(`<img src="${responseJson.message}" class="result-img">`)
        $('.result').removeClass('hidden');
    }
}

function watchForm() {
    $('form').submit(event => {
        let name = $(breed).val()
        console.log('submit');
        event.preventDefault();
        getDogImages(name);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});