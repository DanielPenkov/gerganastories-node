const { Router } = require('express');

const attachTo = (app, data) => {
    const apiRouter = new Router();

    apiRouter
        .get('/', (req, res) => {
            return data.categories.getAll()
                .then((albums) => {
                    return res.send(albums);
                });
        });

    app.use('/api/categories', apiRouter);
};

module.exports = { attachTo };
