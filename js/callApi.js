function addContent(data){
    //console.log(data);
    var content = document.createElement('div');
    content.className = 'content';

    var contentTitle = document.createElement('div');
    contentTitle.className = 'contentTitle';

    var h4 = document.createElement('h4');
    var texth4 = document.createTextNode(data.title);

    var date = document.createElement('p');
    date.className = 'date';
    var textdate = document.createTextNode(data.createdAt);
    date.appendChild(textdate);

    h4.appendChild(texth4);
    contentTitle.appendChild(h4);
    content.appendChild(contentTitle);
    content.appendChild(date);
    document.getElementsByClassName("box")[data.listId - 1].appendChild(content);
}


function addElement(data, datacontent){
    for (var i = 0; i < data.length; i++){
        var box  = document.createElement('div');
        box.className = 'box';
        var title = document.createElement('div');
        title.className = 'title';
        var h3 = document.createElement('h3');
        var texth3 = document.createTextNode(data[i].name);
        h3.appendChild(texth3);
        title.appendChild(h3);
        box.appendChild(title);
        document.getElementsByClassName("main")[0].appendChild(box);
        //console.log(data[i]);
    }
    
    for (var i = 0; i < datacontent.length; i++){
        //console.log(datacontent[i]);
        addContent(datacontent[i]);
    }
}

fetch('http://5e5e2557725f320014ed10b3.mockapi.io/lists')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
        fetch('http://5e5e2557725f320014ed10b3.mockapi.io/lists/2/tasks')
        .then((response) => {
            return response.json();
        })
        .then((dataContent) => {
            console.log(dataContent);
            addElement(data, dataContent);
            
        });
    console.log(data);
    //addElement(data);
});


