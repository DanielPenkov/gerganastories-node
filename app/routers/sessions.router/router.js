const attachTo = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/sessions', (req, res) => {
        // auth
        return controller.getAll(req, res);
    });

    app.get('/sessions/form', (req, res) => {
        return res.render('sessions/form');
    });

    app.post('/sessions', (req, res) => {
        const session = req.body;

        // validate photo session
        return data.sessions.create(session)
            .then((dbSession) => {
                return res.redirect('/sessions');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/sessions/form');
            });
    });
};

module.exports = { attachTo };
