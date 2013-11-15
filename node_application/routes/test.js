exports.index = function(req, res){
	//req.flash('REQUEST_FLASH_MSG', { message: 'Added successfully', type: 'success' });
	//req.session.user = 'HELLO USER FROM SESSION';
	res.redirect('foo');
	//res.send(req.session.user);
	//res.send('GO TO USERS');
};

exports.foo = function(req, res){
	//console.log(res.locals.notifications);
	res.render('test', { title: '2'});

	//res.send('=> ' + req.flash('info'));
};