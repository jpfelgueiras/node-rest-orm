module.exports = (app, db) => {
    app.get("/author/:id", (req, res) =>
        db.author.findByPk(req.params.id).then((result) => res.json(result))
    );
    app.get("/authors",(req, res) =>
        db.author.findAll().then((result) => res.json(result))
    );
}