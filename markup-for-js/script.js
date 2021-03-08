function getInputValue() {
    return document.getElementById('add-item-text').value;
}

function createNewListItem(text) {
    let newListItem = document.createElement('li');
    newListItem.className = 'list-group-item';

    let newListItemSpan = document.createElement('span');
    newListItemSpan.className = 'list-group-item-text';
    newListItemSpan.textContent = text;

    let newListItemLink = document.createElement('a');
    newListItemLink.href = "#";
    newListItemLink.className = 'list-group-item-button';
    newListItemLink.title = "Remove item";
    newListItemLink.textContent = "x";

    newListItem.appendChild(newListItemSpan);
    newListItem.appendChild(newListItemLink);

    addDeleteFunctionality(newListItem);

    return newListItem;
}


document.getElementById('add-button').addEventListener('click', function() {
    let inputValueText = getInputValue();
    if (inputValueText === "") {
        alert('Unesi namirnicu pre dodavanja u šoping lisu!');
    } else {
        let newListItem = createNewListItem(inputValueText);
        let list = document.getElementById('list-items');
        list.appendChild(newListItem);
    }
})

function addDeleteFunctionality(listItem) {
    listItem.lastElementChild.addEventListener('click', function() {
        let list = document.getElementById('list-items');
        list.removeChild(listItem);
    })
}