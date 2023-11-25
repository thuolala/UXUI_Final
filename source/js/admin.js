$(document).ready(function() {
    //pie
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var gradient1 = ctxP.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgb(255, 255, 255)');
    gradient1.addColorStop(1, 'rgb(0, 131, 255)');  
    var gradient2 = ctxP.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'rgb(255, 255, 255)');
    gradient2.addColorStop(1, 'rgb(255, 0, 183)');  

    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
        datasets: [{
            backgroundColor : [gradient2, gradient1],
            strokeColor : "#ff6c23",
            pointColor : "#fff",
            pointStrokeColor : "#ff6c23",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#ff6c23",
            data: [100, 300]
        }]
        },
        options: {
            responsive: true,
        }
    });

    //bar 
    var xValuesB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var yValuesB = [55, 5, 44, 24, 15, 100, 65, 23, 10, 30, 55, 90];
    var barColors = [gradient1, gradient2, gradient1, gradient2, gradient1, gradient2, gradient1, gradient2, gradient1, gradient2, gradient1, gradient2];

    new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValuesB,
        datasets: [{
        backgroundColor: barColors,
        data: yValuesB
        }]
    }
    });

    //line 
    var xValuesL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var yValuesL = [55, 5, 44, 24, 15, 100, 65, 23, 10, 30, 55, 90];
    
    new Chart("lineChart", {
      type: "line",
      data: {
        labels: xValuesL,
        datasets: [{
          borderColor: gradient1,
          data: yValuesL
        }]
      }
    });
});