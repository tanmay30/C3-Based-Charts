 // function for pie chart
var chart1 = c3.generate({
  
    bindto: '#chart',
    data: {
        // iris data from R
        columns: [
            ['data1', 50],
            ['data2', 30],
            ['data3', 20]
        ],
        type : 'pie',
        
    }
});

// function for bar chart
var char2 = c3.generate({
  
    bindto: '#chartOne',
    data: {
        // iris data from R
        columns: [
            ['data1', 50],
            ['data2', 30],
            ['data3', 20]
        ],
        type : 'bar',
        
    }
});
