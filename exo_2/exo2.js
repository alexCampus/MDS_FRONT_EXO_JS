const typeFR = {
    house: 'maison',
    car: 'voiture',
    videoGame: 'jeux videos',
    show: 'spectacle',
    mountainbike: 'VTT'
};
let ul = document.getElementById('list');

function iterateArray (array) {
    ul.innerHTML = '';
    array.forEach(el => {
        let elTypeFr = typeFR[el.type];
        el[el.type] = elTypeFr;
        renderHtml(ul, el);
    });
}

function renderHtml (selector, item) {
    selector.innerHTML += '<li style="' + (item.quantity > 0 ? 'color:green' : 'color:red') + '">' + item.name + ' ' + item.type + ' ' + item.quantity + '</li>';
}

document.getElementById('btnSearch').addEventListener('click', function () {
    let inputValue = document.getElementById('inputText').value;
    const newData = jsonDatas.filter(el => el.type === inputValue);
    if (newData.length > 0) {
        iterateArray(newData);
    } else {
        ul.innerHTML = 'Désolé pas de résultats';
    }
});

iterateArray(jsonDatas);

document.getElementById('btnForm').addEventListener('click', function () {
    let array = document.getElementsByClassName('input');
    let newObject = {};
    for (let i = 0; i < array.length; i++) {
        newObject[array[i].getAttribute('name')] = array[i].value;
    }
    jsonDatas.push(newObject);
    iterateArray(jsonDatas);
});