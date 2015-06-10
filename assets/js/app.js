var chart = c3.generate({
				bindto: '#chart',
				data: {
					columns: [
						["Design", 40],
						["Work-Out", 15],
						["Social", 20], // id, value
						["Coding", 70],
						["Research", 25], 
						["Coffee", 10], 
						["Hang-Out", 15]
					],
					colors: {
						"Social": '#F27E88', // id, color value
						"Coding": '#ADB8D9', 
						"Work-Out": '#CCCCCC', 
						"Design": '#7E8C69', 
						"Research": '#94A66F', 
						"Coffee": '#FC0'
					},
					type : 'donut',
					// onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
					// onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
					// onclick: function (d, i) { console.log("onclick", d, i, this); },
					order: null, // set null to disable sort of data. desc is the default.
				},
				tooltip: {
					format: {
						value: function (value, ratio, id, index) { 
							var ratio = Math.floor( ratio * 100 );
							return ratio + '%'; 
							// return id; 
						}
					}
					// ,
					// position: function (data, width, height, element) {
					// 	return {top: 0, left: 0}
					// }
				},
				// size: {
				// 	width: 640
				// },
				interaction: {
					enabled: true
				},
				// transition: {
				// 	duration: 1000
				// },
				// axis: {
				// 	x: {
				// 		label: 'Sepal.Width'
				// 	},
				// 	y: {
				// 		label: 'Petal.Width'
				// 	}
				// },
				donut: {
					label: {
						show: true,
						format: function (value, ratio, id) {
							return value;
						}
					},
					title: "Weekly Activities",
					width: 50
				}
			});

setTimeout(function () {
	chart.load({
		columns: [
			['War-Game', 30],
			['Watching TV', 10]
		],
		colors: {
			"War-Game": '#ADB8D9',
			"Watching TV": 'green'
		},
		unload : [
			'Work-Out', 
			'Design',
			'Coding'
		]
	});
}, 1500);

// chart.data.colors({
// 	Social: 'red',
// 	data2: '#000000'
// });

// setTimeout(function () {
// 	chart.load({
// 		columns: [
// 			['data1', 30, 20, 50, 40, 60, 50],
// 		]
// 	});
// }, 1000);

// setTimeout(function () {
// 	chart.unload({
// 		ids: [
// 			'Social',
// 			'Research'
// 		]
// 	});
// }, 2000);