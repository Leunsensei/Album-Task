const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;

}

// Render data to the webpage
async function renderData() {
    const dataList = await getData(); // Wait for the data to be fetched
    
    let mainList = '';
    let mainModal = '';

    for (let i = 0; i <dataList.length; i++) {
  
        
        const data = dataList[i];

        const title = data.title;
        const body = data.body;
        const id = data.id;

        const listHTML = `
                        <div class="items" onclick="document.getElementById('modal${data.id}').style.display='block'">
                            <div class="title"><a class="number">${data.id}.</a> ${data.title}</div>
                            <div class="body">${data.body.length > 40 ? data.body.slice(0, 40) + "..." : data.body}</div>
                        </div>
                        `;

        const modalHTML =  `
                    <div id="modal${data.id}" class="modal-bg">

                    <div class="modals">
                    <div class="modal-list">
    
                        <div class="modal-items" >
                            <span class="close" onclick="document.getElementById('modal${data.id}').style.display='none'">&times;</span>
                            <div class="modal-title"> ${data.title}</div>
                            <div class="modal-body">${data.body}</div>
                        </div>
                    </div> 
                    </div>
                    </div>
                        `;

      
                        mainList += listHTML;
                        mainModal += modalHTML;

        console.log(`this books is called; ${data.title} and it's synopsis is about ${data.body}`)
    };

    document.querySelector('.list-items').innerHTML= mainList;
    document.querySelector('.modals').innerHTML= mainModal;
}

// Call the renderData function
renderData();

