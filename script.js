const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;

}

// Render data to the webpage
async function renderData() {
    const dataList = await getData(); // Wait for the data to be fetched
    
    for (let i = 0; i <dataList.length; i++) {
        const data = dataList[i];

        const title = data.title;
        const body = data.body;

        console.log(`this books is called; ${data.title} and it's synopsis is about ${data.body}`)
    };

}

// Call the renderData function
renderData();

