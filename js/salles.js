			var calendar = $("#Salle1").calendar(
				{
					view:"day",
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
			var calendar2 = $("#Salle2").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Réservation",
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
						"id": 293,
						"title": "Event 1",
						"url": "http://example.com",
						"class": "event-important",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					}
				]
				});
				var calendar4 = $("#Salle4").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar5 = $("#Salle5").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar6 = $("#Salle6").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar7 = $("#Salle7").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar8 = $("#Salle8").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar9 = $("#Salle9").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var calendar10 = $("#Salle10").calendar(
				{
					events_source: [
					{
						"id": 293,
						"title": "Event 1",
						"start": 1618253696584, // Milliseconds
						"end": 1618393696584 // Milliseconds
					},
				]
				});
				var hours = $("#Hours").calendar(
				{
					view: 'hour',
					events_source: function () { return []; }
				});