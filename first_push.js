function buildCharts(sample)

// place url in file
const url= 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

//collect JSON data and log it
d3.json(url).then(function(data){
    console.log(data)});

// dashboard setup
function int() {
    let dropDownmenu= d3.select("#selDataset");
};

consule.log(subject)

var otu_ids= subject.otu_ids;
var otu_labels= subject.otu_labels;
var sample_values= subject.sample_values;

//function buildCharts(sample) {
    //d3.json(url).then(function(data){
        //var samplesComplete = data.samples;
        //var sampleInfo=samplesComplete.filter(row => row.id == sample);
        //var sampleValues=sampleInfo[0].sample_values;
        //var sampleValueSlice = sampleValues.slice(0,10).reverse();
        //var otuIds= sampleInfo[0].otuIds;
        //var otuIdSlice= otuIds.slice(0,10).reverse();
        //var otuLabels= sampleInfo[0].otu_l;
        //var otuLabelsSlice= otuLabels.slice(0,10).reverse();


   //     )
//

//bar chart
var traceIt = {
    x: values.slice(0, 10).reverse(),
    y: ids
      .slice(0, 10)
      .map((otuID) => `OTU ${otuID}`)
      .reverse(),
    text: labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: "h",
  };

  var data = [trace1];

  var layout = {
    title: "Top ten Cultures found"
    y: { autorange: true}
    x: { autorange: true}
    height: 400
  };
 
  plotly.newPlot("bar", data, layout);

  // Bubble Chart
  function buildCharts(trace1)= {
    x: otu_ids,
    y: sample_values,
    mode: "markers"
    marker: {color: otu_ids, size: sample_values, colorscale: "Earth"}
  };


let layout = {
  title "OTU ID",
  hovermode: "closest",
}




//plotyly bubblechart
plotly.newPlot("bubble", [trace1], layout)