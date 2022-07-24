const Author = require('../models/author.model');


module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.status(201).json(newAuthor);
            })
            .catch((err) => {
                console.log('Error creating Author', err);
                res.status(400).json({message: 'Error creating Author', errors: err.errors});
            });
    },
    
    getAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log('Error getting all Authors', err);
                res.status(400).json({message: 'Error getting all Authors', errors: err.errors});
            });
    },
    
    getAuthorById: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                res.json(oneAuthor);
            })
            .catch((err) => {
                console.log('Error getting one Author', err);
                res.status(400).json({message: 'Error getting one Author', errors: err.errors});
            });
        },
    
    updateAuthorById: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedAuthor) => {
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log('Error updating one Author', err);
                res.status(400).json({message: 'Error updating one Author', errors: err.errors});
            });
    },
    
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.log('Error deleting one Author', err);
                res.status(400).json({message: 'Error deleting one Author', errors: err.errors});
            });
    },
};

