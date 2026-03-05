//Reference websites: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch, https://www.geeksforgeeks.org/html/html-table-align-attribute/
// Also inspired/borrowed from instructor's github and additional websites(see README)


//make the call to api and fetch data
async function getPopData() {
    const response = await fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year")
    const popDataResult = await response.json();
    console.log(popDataResult);
    renderPop(popDataResult.data);


}

function renderPop(data) {
    // refer to html poptable
    const popDiv = document.getElementById("poptable");
    popDiv.innerHTML = "";
    popDiv.innerHTML += `        
        <tr>
            <th>Year</th>
            <th>Population</th>
        </tr>`
    // put the year and population into table rows
    data.forEach((x) => {
        popDiv.innerHTML += `
        
        <tr> 
        
        <td>${x.Year}</td>    
        <td>${x.Population} </td>
            

        </tr>`;
    })

}



//IIFE format
(() => {
    getPopData();
})();