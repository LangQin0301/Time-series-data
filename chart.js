// YOUR CODE !! 
// http://c3js.org/samples/timeseries.html
	var chart = c3.generate({
		// TELL IT WHERE TO PUT IN IN YOUR HTML (#chart)
		bindto: '#chart',
    	data: {
        	x: 'x',
			    xFormat: '%Y-%m-%d', // 'xFormat' can be used as custom format of 'x'
        	columns: [ 	
              ['x', '1970-01-01', '1980-01-01', '1990-01-01', '2000-01-01', '2009-01-01'],
				      // ['x', '2013', '2014', '2015', '2016', '2017'],
            	['Single (20-24)', 36.3, 51.3, 64.6, 69.1, 77.4],
            	['Married (20-24)', 57.9, 41.4, 29.9, 22.5, 18.8]
       	 	],

   	 	},
      axis: {
        x: {
          // TELL IT WHAT TYPE OF CHART YOU'RE MAKING
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
      },
      line: {
        width: 40,
      },
   	 	// LET'S ADD SOME DIFFERENT COLORS
   	 	color: {
   	 		pattern: ['#7400ff','#ff008b','#00ff74']
   	 	}
	});
// THIS IS FOR THE TRANSITION
	setTimeout(function () {
    	chart.load({
    		// this would work if you had negative values in your data, and wanted a negative to positive y axis
        	columns: [
            	['Widowed (20-24)', 0.7, 0.3, 0.2, 4.2, 0.3]
        	]
		});
		// THIS NUMBER SAYS HOW LONG (seconds) BEFORE THE CHART TRANSITIONS
