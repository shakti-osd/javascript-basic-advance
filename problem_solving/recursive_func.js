function readHugeList(){
    return [1, 3, 4, 5, 6, 7, 7]
}

var list = readHugeList();

var nextListItem = function(){
    var item = list.pop();
    if(item) {
        // process the list item
        setTimeout(nextListItem(), 0)
    }
}

nextListItem()