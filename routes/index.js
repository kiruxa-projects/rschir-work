var express = require('express');
var router = express.Router();
const {Sequelize} = require('sequelize');

/* GET home page. */
router.get('/', async function (req, res, next) {
	const sequelize = new Sequelize(process.env.DATABASE_URL);
	const users = await sequelize.query('SELECT * FROM users', {type: sequelize.QueryTypes.SELECT})
	res.render('index', {title: 'Express', users, data: process.env});
});

module.exports = router;
