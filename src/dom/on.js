Cork.prototype.on = function(what, cb) {
	if (typeof what === 'object') {
		for (var key in what) {
			if (what.hasOwnProperty(key)) {
				this._on_what(key, what[key]);
			}
		}
	} else {
		this._on_what(what, cb);
	}
}

Cork.prototype._on_what = function(what, cb) {
	switch(what) {
		case 'click':
			document.getElementById(this.el).addEventListener('click', cb);
			break;
		case 'hover':
			if (util.exists(cb.in)) {
				document.getElementById(this.el).addEventListener('mouseover', cb.in);
			}
			if (util.exists(cb.out)) {
				document.getElementById(this.el).addEventListener('mouseout', cb.out);
			}
			break;
		default:
			break;
	}
}
