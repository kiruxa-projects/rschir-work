var express = require('express');
var router = express.Router();
const {Sequelize} = require('sequelize');

/* GET home page. */
router.get('/', async function (req, res, next) {

	let DB_URL = `postgres://postgres:${process.env.DB_PASSWORD}@db:5432/postgres`
	if (process.env.NODE_ENV === 'development') {
		DB_URL = `postgres://postgres:${process.env.DB_PASSWORD}@localhost:5439/postgres`
	}

	const sequelize = new Sequelize(DB_URL);
	const users = await sequelize.query('SELECT * FROM users', {type: sequelize.QueryTypes.SELECT})
	res.render('index', {title: 'Express', users, data: {...process.env, ...{DATABASE_URL: undefined, DB_PASSWORD: undefined}}});
});

module.exports = router;
