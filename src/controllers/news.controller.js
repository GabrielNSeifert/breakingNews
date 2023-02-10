import { createService, findAllService } from '../services/news.service.js';

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;
    
        if (!title || !text || !banner) {
            res.status(400).send({ message: "Submit all fields for registration." });
        };
         
        const news = await createService({ 
            title, 
            text, 
            banner, 
            user: {_id: '63e557f6cd3c9d339a77bd38'}
        });
    
        if (!news) {
            res.status(400).send({message: 'Error creating News.'})
        }

        res.status(201).send(news);
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};

const findAll = async (req, res) => {
    try {
        const news = await findAllService();

        if (news.lenght === 0) {
            return res.status(400).send({ message: 'No registered news.' });
        };

        res.send(news);

    } catch (error) {
        res.status(500).send({ message: error.message });
    };
}

export default { create, findAll }
