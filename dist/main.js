var items = document.getElementById('items');
var btn = document.getElementById('submitBtn');
var filterItems = document.getElementById('filter');



btn.addEventListener('click', getInput);

items.addEventListener('click', deleteInput);

filterItems.addEventListener('keyup', filterInput);

function getInput(e){
    e.preventDefault();

    var input = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(input));

    var deleteButton = document.createElement('button');

    deleteButton.className = 'btn btn-danger btn-sm float-end delete';

    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

    
    items.appendChild(li);
    input.display = '';
    
};

function deleteInput(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        items.removeChild(li);
    }
};

function filterInput(e){
    var textInput = e.target.value.toLowerCase();
    var lis = items.getElementsByTagName('li');

    Array.from(lis).forEach(function (item) {
        var liName = item.firstChild.textContent;

        if(liName.toLowerCase().indexOf(textInput) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    });
};