
let word = document.querySelector('.item').innerHTML;
console.log(word);
searchImage();

// SEARCH Function______________
function searchImage() {

    let linkStart = 'https://api.unsplash.com/search/photos/?';
    let linkEnd = 'orientation=landscape&client_id=f_3mMp7_xMl3uKhZjzUmrSVPnmBDUoy4cJKiQLVTuGw';

    fetch(linkStart + 'query=' + word + "&" + linkEnd)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            let link = data.results[randomNum].links.download;
            console.log(link);
            document.querySelector('.image-container').style.backgroundImage = `url(${link})`;
        })
}



// INPUT________________
let inputValue = document.querySelector('.search__query');
let inputButton = document.querySelector('.search__butoon');

inputButton.onclick = function () {
    if (inputValue.value == '') {
        inputValue.value = 'SEARCH WORD HERE';
        inputValue.style.color = 'red';
    }
    else {
        word = inputValue.value;
        document.querySelector('.item').innerHTML = word;

        searchImage();
    }

}

// Clear Search Form_______________
inputValue.onclick = function () {
    inputValue.style.color = 'black';
    inputValue.value = '';
}


// Random number 0..9
let randomNum = Math.floor(Math.random() * 10);

