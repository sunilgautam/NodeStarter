
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home', page_name: 'home' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact', page_name: 'contact' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About', page_name: 'about' });
};