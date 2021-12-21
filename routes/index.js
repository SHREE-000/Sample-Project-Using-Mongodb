var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', async (req, res, next) => {
	var user = req.session.user;
	console.log(user)


	const image = [
		{
		img: "https://bit.ly/3F3Go6c"
	  },
	  {
		img: "https://bit.ly/3knl97n"
	  },
	  {
		img: "https://bit.ly/3C936rK"
	  },
	  {
		img: "https://bit.ly/3qmEhWX"
	  },
	  {
		img: "https://bit.ly/3wzUl8B"
	  },
	  {
		img: "https://bit.ly/3ocWnrO"
	  },
	  {
		img: "https://bit.ly/3C2ZLKv"
	  },
	  {
		img: "https://bit.ly/3bY8yTG"
	  },
	  {
		img: "https://bit.ly/3qW9jVY"
	  },
	  {
		img: "https://bit.ly/3DDRtdF"
	  },
	  {
		img: "https://bit.ly/3oKBNiA"
	  },
	  {
		img: "https://bit.ly/3HDRukm"
	  }
	
	];
	


	res.render('index', { title: 'Home', user , image})
});

router.get('/logout', (req, res) => {
	req.session.destroy()
	res.redirect('/')
  })

module.exports = router;
