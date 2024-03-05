function newItem() {

    //jQuery
    //Adding a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('list').append(li);
    }

    //Crossing out item
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // Adding delete button "X"
    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on("click", deleteListItem);

    //Adding Class Delete to display: none
    function deleteListItem() {
        li.addClass("delete")
    }


    // Reorder Items
    $('#list').sortable();
}

