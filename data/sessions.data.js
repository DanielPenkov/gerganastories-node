const BaseData = require('./base/base.data');
const Session = require('../models/session.model');

class SessionsData extends BaseData {
    constructor(db) {
        super(db, Session, Session);
    }

    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports = SessionsData;
