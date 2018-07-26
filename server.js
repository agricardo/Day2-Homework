var express = require('express');
var app = express();
var port = 3002;
var host = '127.0.0.1';

app.use(express.static('client'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var pizzas = [{
        'id': 1,
        'owner': 'Richard',
        'size': 'familiar',
        'name': 'Cheese Pizza',
        'extras': 'cheese'
    },
    {
        'id': 2,
        'owner': 'Pedro',
        'size': 'regular',
        'name': 'Jamon and Cheese Pizza',
        'extras': 'pineapple'
    }
]

var id = 2;

app.get('/pizzas', (req, res) => {
    res.json(pizzas);
});

app.get('/pizzas/:id', (req, res) => {
    var pizza = pizza.find(pizza => {
        return pizza.id == req.params.id;
    });
    res.json(pizza || {});
});

app.post('/pizza', (req, res) => {
    var pizza = req.body;
    id++;
    pizza.id = id + '';

    pizzas.push(pizza);
    res.json(pizza);
});

app.put('/pizza/:id', (req, res) => {
    var update = req,
        body;
    if (update.id) {
        delete update.id;
    }

    var pizza = pizzas.findIndex(pizza => pizza.id == req.params.id);
    if (!pizzas[pizza]) {
        res.send();
    } else {
        var updatedPizza = Object.assign(pizzas[pizza], update);
        res.json(updatedPizza);
    }
})

app.delete('.pizza/:id', (req, res) => {
    var pizza = pizza.findIndex(pizza => pizza.id == req.params.id);
    if (!pizzas[pizza]) {
        res.send();
    } else {
        var deletedPizza = pizzas[pizza];
        pizzas.splice(pizza, 1);
        res.json(deletedPizza);
    }
});

app.listen(port, host, function () {
    console,
    log('listening on http://localhost', port);
})