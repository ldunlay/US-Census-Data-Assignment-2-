//Reference website: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Also inspired/borrowed from instructor's github (see README)



async function getPopData() {
    const response = await fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year")
    const popDataResult = await response.json();
    console.log(popDataResult);
    renderPop(popDataResult.data);


}

function renderPop(data) {
    const popDiv = document.getElementById("poptable");
    popDiv.innerHTML = "";
    data.forEach((x) => {
        popDiv.innerHTML += `

        <tr> 
        
        <td>${x.Year}    ${x.Population} </td>
            

        </tr>`;
    })

}

//document.getElementById("poptable").innerHTML = popDataResult


(() => {
    getPopData();
})();