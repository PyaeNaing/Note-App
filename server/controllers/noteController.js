const Notes = require("../models/notes")
let counter = 0;
// const redis = require('redis');
// const client = redis.createClient();

exports.createNotes = function (req, res) {
    try {
        let newNote = new Notes({
            title: req.body.title,
            notes: req.body.notes,
        })

        newNote.save(function (err) {
            if (err) return res.status(500).send(err);
            else return res.status(200).send("ok");
        })
    }
    catch (err) {
        res.status(500).send(err)
    }
};

exports.getOneNote = function (req, res) {
    try {
        Notes.findById(req.query.id, function (err, notes) {
            if (err) return res.status(500).send(err);
            if (notes) return res.status(200).json(notes);
            else return res.status(404).send("Cannot find Notes");
        });
    }
    catch (err) {
        res.status(500).send(err)
    }
};

exports.editNotes = function (req, res) {
    try {
        Notes.findById(req.body.id, function (err, notes) {
            if (err) return res.status(500).send(err);
            if (notes) {
                notes.notes = req.body.notes;
                notes.save();
                res.status(200).send(notes);
            }
            else return res.status(404).send("Cannot find Notes");
        }).then().catch(err => res.send(err));
    }
    catch (err) {
        res.status(500).send(err)
    }
}

exports.getAllNotes = function (req, res) {
    try {
        Notes.find({}, function (err, notes) {
            if (err) return res.status(500).send(err);
            if (notes) return res.status(200).json(notes);
            else return res.status(404).send("Cannot find Notes");
        })

    }
    catch (err) {
        res.status(500).send(err)
    }
}

exports.getClient = function (req, res) {
    try {
        res.send(++counter + "");
        
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}