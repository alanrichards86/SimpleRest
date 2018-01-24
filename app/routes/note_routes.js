
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
    //This is my READ Route ----------
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { "_id": new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        })
    });
    //This is my CREATE Route ----------
    app.post('/notes', (req, res) => {
        const note = { test: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if(err) {
                res.send({'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};