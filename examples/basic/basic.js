// Create new cork instance
var cork = new Cork();

// Bind single event
cork.element('#alert-a').on('click', function() {
	alert('a!');
});

// Bind multiple events
cork.element('#alert-b').on({
	click: function() { alert('clicked!'); },
	hover: {
		in: function() { console.log('enter!'); },
		out: function() { console.log('leave!'); },
	}
});
