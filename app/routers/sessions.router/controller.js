const init = (data) => {
    const controller = {
        getAll(req, res) {
            return data.sessions.getAll()
                .then((sessions) => {
                    return res.render('sessions/all', {
                        context: sessions,
                    });
                });
        },
    };

    return controller;
};


module.exports = {
    init,
};
