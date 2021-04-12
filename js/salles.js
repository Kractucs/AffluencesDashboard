			var calendar = $("#Salle1").calendar(
				{
					view:"day",
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
			var calendar2 = $("#Salle2").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					}
				]
				});
			var calendar3 = $("#Salle3").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					}
				]
				});
				var calendar4 = $("#Salle4").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
				var calendar5 = $("#Salle5").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
					{
						"class": "event-important",
						"start": 1618250400000, // Milliseconds
						"end": 1618252200000 // Milliseconds
					},
				]
				});
				var calendar6 = $("#Salle6").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
				var calendar7 = $("#Salle7").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
				var calendar8 = $("#Salle8").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
				var calendar9 = $("#Salle9").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618236000000, // Milliseconds
						"end": 1618243200000 // Milliseconds
					},
				]
				});
				var calendar10 = $("#Salle10").calendar(
				{
					events_source: [
					{
						"class": "event-important",
						"start": 1618250400000, // Milliseconds
						"end": 1618252200000 // Milliseconds
					},
				]
				});
				var hours = $("#Hours").calendar(
				{
					view: 'hour',
					events_source: function () { return []; }
				});