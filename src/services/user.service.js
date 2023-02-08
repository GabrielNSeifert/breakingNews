import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findyByIdService = (id) => User.findById(id);

const updateService = (id, name, username, email, password, avatar, background) => {
    return User.findOneAndUpdate({_id: id}, {name, username, email, password, avatar, background});
};

const deleteUserById = (id) => {
    return User.deleteOne({_id: id});
};

export default {
    createService,
    findAllService,
    findyByIdService,
    updateService,
    deleteUserById
};
