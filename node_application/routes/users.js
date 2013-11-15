
/*
 * GET users listing.
 */

 var users = [
 	{ id: '1', name: 'Sunil', email: 'sunil@kwebmaker.com' },
 	{ id: '2', name: 'Sumit', email: 'sumit@kwebmaker.com' },
 	{ id: '3', name: 'Saloni', email: 'saloni@kwebmaker.com' }
 ];

exports.index = function(req, res){
	var util = require('../repos/user_repo');
	//util.helpers.init();
	res.render('users/index', { title: 'Users', page_name: 'users', users: users });
};

exports.show = function(req, res){
	var user = null;
	for (var i = 0; i < users.length; i++) {
		if ((users[i]).id == req.params.id) {
			user = users[i];
			break;
		}
	};

	if (user) {
		res.render('users/show', { title: 'View user', page_name: 'users', user: user });
	} else {
		res.render('404', { title: 'User not found', page_name: 'users' });
	}
};

exports.new = function(req, res){
  res.render('users/new', { title: 'Add new users', page_name: 'users' });
};

exports.edit = function(req, res){
  	var user = null;
	for (var i = 0; i < users.length; i++) {
		if ((users[i]).id == req.params.id) {
			user = users[i];
			break;
		}
	};

	if (user) {
		res.render('users/edit', { title: 'Edit user', page_name: 'users', user: user });
	} else {
		res.render('404', { title: 'User not found', page_name: 'users' });
	}
};

exports.create = function(req, res){
	var new_user = { id: (users.length + 1), name: req.body.name, email: req.body.email };
	users.push(new_user);
	req.flash('REQUEST_FLASH_MSG', { message: 'User added successfully', type: 'success' });
  	res.redirect('/users');
};

exports.update = function(req, res){
  res.render('users/index', { title: 'Users', page_name: 'users', users: users });
};

exports.destroy = function(req, res){
  res.render('users/index', { title: 'Users', page_name: 'users', users: users });
};