
            // draws a rectangle with a rounded top
        Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          // top right corner
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          // bottom right   corner
          ctx.lineTo(x + width, y + height);
          // bottom left corner
          ctx.lineTo(x, y + height);
          // top left   
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
        };
         
        Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
          draw: function() {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped;
            var borderWidth = vm.borderWidth;
         
            if (!vm.horizontal) {
              // bar
              left = vm.x - vm.width / 2;
              right = vm.x + vm.width / 2;
              top = vm.y;
              bottom = vm.base;
              signX = 1;
              signY = bottom > top? 1: -1;
              borderSkipped = vm.borderSkipped || 'bottom';
            } else {
              // horizontal bar
              left = vm.base;
              right = vm.x;
              top = vm.y - vm.height / 2;
              bottom = vm.y + vm.height / 2;
              signX = right > left? 1: -1;
              signY = 1;
              borderSkipped = vm.borderSkipped || 'left';
            }
         
            // Canvas doesn't allow us to stroke inside the width so we can
            // adjust the sizes to fit if we're setting a stroke on the line
            if (borderWidth) {
              // borderWidth shold be less than bar width and bar height.
              var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
              borderWidth = borderWidth > barSize? barSize: borderWidth;
              var halfStroke = borderWidth / 2;
              // Adjust borderWidth when bar top position is near vm.base(zero).
              var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
              var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
              var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
              var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
              // not become a vertical line?
              if (borderLeft !== borderRight) {
                top = borderTop;
                bottom = borderBottom;
              }
              // not become a horizontal line?
              if (borderTop !== borderBottom) {
                left = borderLeft;
                right = borderRight;
              }
            }
         
          
            var barWidth = Math.abs(left - right);
            var roundness = this._chart.config.options.barRoundness || 0.5;
            var radius = barWidth * roundness * 1;
             
          
            var prevTop = top;
             
            // move the top down so there is room to draw the rounded top
            top = prevTop + radius;
            var barRadius = top - prevTop;
         
            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;
         
            Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);
         
            ctx.fill();
            if (borderWidth) {
              ctx.stroke();
            }
            
            top = prevTop;
          },
        });
         
        Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar); 
        Chart.controllers.roundedBar = Chart.controllers.bar.extend({
          dataElementType: Chart.elements.RoundedTopRectangle
        });

             
        canvas = document.getElementById('myChart1');
        canvas.height = 80;

            var config = {
               type: 'bar',
               data: {
                 labels: ["JAN", "FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
                 datasets: [{
                   label: "Earnings($)",
                   data: [50,100,150,200,202,300,150,50,300,20,200,160],
                 type: "roundedBar",
                 backgroundColor: "#5ECB5E" ,
                 hoverBackgroundColor:"#FF0000"
                 }]
               },
              
               options: {
                 responsive: true,
                 legend: {
                   position: 'bottom',
                   display: false,
                   FontSize:40,
                   padding:10,     
                 },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display:false
                        },
                        barPercentage: 0.2,
                        scaleLabel: {
                            display: true,
                            position: 'left',
                            FontSize:14
                        }
                   }],
                   yAxes: [{
                     display: true,
                     scaleLabel: {
                       display: true,
                     },       
                   }]
                 }
               }
             };
            $.each(config.data.datasets, function(i, dataset) {
            });

            var ctx = document.getElementById("myChart1").getContext("2d");
            window.myLine = new Chart(ctx, config);


          // 2 chart

        canvas = document.getElementById('myChart2');
        canvas.height = 80;

            var config = {
               type: 'bar',
               data: {
                 labels: ["JAN", "FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
                 datasets: [{
                   label: "Earnings($)",
                   data: [50,100,150,200,202,300,150,50,300,20,200,160],
                 type: "roundedBar",
                 backgroundColor: "#5ECB5E" ,
                 hoverBackgroundColor:"#FF0000"
                 }]
               },
              
               options: {
                 responsive: true,
                 legend: {
                   position: 'bottom',
                   display: false,
                   FontSize:40,
                   padding:10,     
                 },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display:false
                        },
                        barPercentage: 0.2,
                        scaleLabel: {
                            display: true,
                            position: 'left',
                            FontSize:14
                        }
                   }],
                   yAxes: [{
                     display: true,
                     scaleLabel: {
                       display: true,
                     },       
                   }]
                 }
               }
             };
            $.each(config.data.datasets, function(i, dataset) {
            });

            var ctx = document.getElementById("myChart2").getContext("2d");
            window.myLine = new Chart(ctx, config);

