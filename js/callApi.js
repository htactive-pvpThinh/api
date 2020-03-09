function addContent(data){
    var content = document.createElement('div');
    content.className = 'content';

    var contentTitle = document.createElement('div');
    contentTitle.className = 'contentTitle';

    var h4 = document.createElement('h4');
    var texth4 = document.createTextNode(data.title);

    var date = document.createElement('p');
    date.className = 'date';
    var textdate = document.createTextNode(data.createdAt);
    
    var desc = document.createElement('p');
    desc.className = 'desc';
    var textdesc = document.createTextNode('Desc: ' + data.desc);
    desc.appendChild(textdesc);

    date.appendChild(textdate);
    h4.appendChild(texth4);
    contentTitle.appendChild(h4);
    content.appendChild(contentTitle);
    content.appendChild(date);
    content.appendChild(desc);
    document.getElementsByClassName("box")[data.listId - 1].appendChild(content);
}


function addElement(data, ){
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
}

fetch('http://5e5e2557725f320014ed10b3.mockapi.io/lists')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      addElement(data);
      for (let i = 0; i <= 3; i++){
        fetch('http://5e5e2557725f320014ed10b3.mockapi.io/lists/'+ i +'/tasks')
        .then((response) => {
            return response.json();
        })
        .then((dataContent) => {
            console.log(dataContent);
            for (let j = 0; j < dataContent.length - 1; j++){
                for (let k = j + 1 ; k < dataContent.length; k++){
                    if (dataContent[j].order > dataContent[k].order){
                        let tmp = dataContent[j];
                        dataContent[j] = dataContent[k];
                        dataContent[k] = tmp;
                    }
                }
                // console.log(dataContent[j]);
                // addContent(dataContent[j]);   
            }
            for (let j = 0;j < dataContent.length; j++){
                    console.log(dataContent[j]);
                    addContent(dataContent[j]);
            }
        });

        console.log(data);
    }  
});


