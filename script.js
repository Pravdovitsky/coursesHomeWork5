let imagesList,
    currentId;

function addScript(src) {
    let elem = document.createElement("script");
    elem.src = src;
    elem.onload = loadFinish;
    document.head.appendChild(elem);
}

addScript('https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108&callback=getImagesList');

function loadFinish(elem) {
    let loader = document.getElementById('loader'),
        content = document.getElementById('content');
    loader.style.display = 'none';
    content.style.display = 'block';
}

function getImagesList(resp) {
    imagesList = resp.response.items;
    for (let i = 0; i < imagesList.length; i++) {
        printItem(i);
    }
}

function showModal() {
    let id = +event.target.id,
        modal = document.getElementById('modal');
    currentId = id;
    changeImg(id);
    modal.style.display = 'flex';
}

function nextImg() {
    changeImg(currentId < imagesList.length ? ++currentId : 0);
}

function prevImg() {
    changeImg(currentId > 0 ? --currentId : imagesList.length);

}

function changeImg(id) {
    let modalImg = document.getElementById('modalImg'),
        counter = document.getElementById('counter');
    currentId = id;
    modalImg.src = imagesList[id].sizes[7].url;
    counter.innerHTML = 'Картинка: ' + (id + 1);
}

function hideModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function printItem(id) {
    let img_link = imagesList[id].sizes[3].url,
        galery = document.getElementById('galery');
    galery.innerHTML += '<img  src="' + img_link + '"  onclick="showModal()" class="mainImg" id="' + id + '">';
}


