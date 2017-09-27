const SessionsData = require('./sessions.data');
const CategoriesData = require('./categories.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        sessions: new SessionsData(db),
        categories: new CategoriesData(db),
        users: new UsersData(db),
    });
};

module.exports = { init };
