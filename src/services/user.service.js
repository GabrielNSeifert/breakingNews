const User = require('../models/User');

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findyByIdService = (id) => User.findById(id);

module.exports = {
    createService,
    findAllService,
    findyByIdService
};
