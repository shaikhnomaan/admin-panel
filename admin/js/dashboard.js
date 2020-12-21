
        var ctx = document.getElementById("city").getContext('2d');
        canvas2 = document.getElementById('city');
        canvas2.height = 350;
        var city = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Infosys","Wipro","HCL","TCS","IBM"],
                datasets: [{
                    label: ['Companies'],
                    data: [500,370,265,300,100],
                    backgroundColor: ["#ffd600","#ffd60080","#ffd60060","#ffd60040","#ffd60020"],
                    hoverBackgroundColor: ["#ffd600","#ffd60080","#ffd60060","#ffd60040","#ffd60020"],
                }]
            },
            options: {
              responsive: true,
              tooltips: {
                enabled:true,
                intersect:false,
              },
              legend:{
                display:false,
              },      
              layout: {
                  padding: {
                      left: 0,
                      right: 30,
                      top: 30,
                      bottom: 0
                  },
              },
              scales: {
                xAxes: [{
                    gridLines: {
                        display:false,
                    },
                    ticks:{
                      min:0
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 13,
                        fontStyle:'bold',
                        labelString: 'Companies'
                      },
                  }],
                  yAxes: [{
                    scaleLabel: {
                        display: true,
                        fontSize: 13,
                        fontStyle:'bold',
                        labelString: 'Points'
                      },
                      ticks:{
                        min:0
                      }
                  }]
              }      
            }
        });

        // 2
        var ctx = document.getElementById("users").getContext('2d');
         canvas2 = document.getElementById('users');
          canvas2.height = 350;
        var users = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Infosys","Wipro","HCL","TCS","IBM"],
                datasets: [{
                    label: ['Users'],
                    data: [500,370,265,300,100],
                    backgroundColor: ["#ffd600","#ffd60080","#ffd60060","#ffd60040","#ffd60020"],
                    hoverBackgroundColor: ["#ffd600","#ffd60080","#ffd60060","#ffd60040","#ffd60020"],
                }]
            },
            options: {
              responsive: true,
              tooltips: {
                enabled:true,
                intersect:false,
              },
              legend:{
                display:false,
              },      
              layout: {
                  padding: {
                      left: 0,
                      right: 30,
                      top: 30,
                      bottom: 0
                  },
              },
              scales: {
                xAxes: [{
                    gridLines: {
                        display:false,
                    },
                    ticks:{
                      min:0
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 13,
                        fontStyle:'bold',
                        labelString: 'Companies'
                      },
                  }],
                  yAxes: [{
                    scaleLabel: {
                        display: true,
                        fontSize: 13,
                        fontStyle:'bold',
                        labelString: 'Points'
                      },
                      ticks:{
                        min:0
                      }
                  }]
              }      
            }
        });
