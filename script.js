//Reference website: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Also inspired/borrowed from instructor's github (see README)

(async function getPopData() {
    const response = await fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year")
    const popDataResult = await response.json();
    console.log(popDataResult);
})()

