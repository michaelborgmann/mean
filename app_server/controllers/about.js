exports.about = function(req, res) {
    res.render('about', {
      title: 'About',
      content: { details: 'Lorem ipsum dolor sit amet' },
      list: [ 'one', 'two', 'three' ]
    });
};
