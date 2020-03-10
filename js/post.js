var data = {
    title: "Candace Waters",
    desc: "desc 3",
    order: 40
}


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data) 
        });
    return await response.json();
}
      
postData('http://5e5e2557725f320014ed10b3.mockapi.io/lists/3/tasks', data)
.then((data) => {
    console.log(data);
});