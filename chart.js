// YOUR CODE !! 
// http://c3js.org/samples/timeseries.html
	var chart = c3.generate({
		// TELL IT WHERE TO PUT IN IN YOUR HTML (#chart)
		bindto: '#chart',
    	data: {
        	x: 'x',
			    xFormat: '%Y-%m-%d', // 'xFormat' can be used as custom format of 'x'
        	columns: [ 	
              ['x', '1999-12-31', '2001-12-31', '2003-12-31', '2005-13-31', '2007-12-31'],
				      // ['x', '1999', '2001', '2003', '2005', '2007'],
            	['Robbery', 150.1, 148.5, 142.5, 140.8, 148.3],
            	['Aggravated Assault Rate', 334.3, 318.6, 295.4, 290.8, 287.2]
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
            	['Rape', 32.8, 31.8, 32.3, 31.8, 30.6]
        	]
		});
		// THIS NUMBER SAYS HOW LONG (seconds) BEFORE THE CHART TRANSITIONS
	}, 1000);
