const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use( express.static('public_html') );

app.get('/', (req, res) => {
	res.send('hello world');
});

const weights = [
	{ weight: 210, date: new Date('10/25/2021') },
	{ weight: 213, date: new Date('10/20/2021') },
	{ weight: 216, date: new Date('10/19/2021') },
	{ weight: 214, date: new Date('10/15/2021') },
	{ weight: 217.5, date: new Date('10/10/2021') },
	{ weight: 219, date: new Date('10/06/2021') }
];

// weight routes
// get route -> returns my weight as a JSON array?
app.get('/weight', (req,res) => {
	// return the JSON array of our weight.
	res.json(weights);
});

// post route -> stores my weight as a JSON array
app.post('/weight', (req, res) => {
	// user has posted a weight, store that weight
	console.log(req.body.weight);
	weights.unshift({ weight: parseInt(req.body.weight), date: new Date() });
	// return the full weight array
	res.redirect('/');
});

app.listen(8080);
