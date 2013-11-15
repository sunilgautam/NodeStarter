module.exports = {
	init: function() {
		console.log('_________HELLO USER REPO_________');
	},
	getAll: function() {
		return users || [];
	},
	getById: function(id) {
		var user = null;
		for (var i = 0; i < users.length; i++) {
			if ((users[i]).id == id) {
				user = users[i];
				break;
			}
		}

		return user;
	},
	count: function() {
		return users.length;
	},
	save: function(user) {
		user.id = (users.length + 1);
		users.push(user);
	},
	update: function(user) {
		users[user.id - 1] = user;
	},
	delete: function() {
		users.splice((user.id - 1), 1);
	}
};