import { createService, findAllService, countNews, topNewsService, findByIdService, searchByTitleService, byUserService, updateService, eraseService, likeNewsService, deleteLikeNewsService, addCommentService, deleteCommentService } from '../services/news.service.js';

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
            user: { _id: req.userId }
        });

        if (!news) {
            res.status(400).send({ message: 'Error creating News.' })
        }

        res.status(201).send(news);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};

const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const news = await findAllService(limit, offset);
        const next = offset + limit;
        const currentUrl = req.baseUrl;
        const total = await countNews();
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if (news.lenght === 0) {
            return res.status(400).send({ message: 'No registered news.' });
        };

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                userName: item.user.username,
                userAvatar: item.user.avatar
            })),
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    };
}

const topNews = async (req, res) => {
    try {
        const news = await topNewsService();

        if (!news) {
            return res.status(400).send({ message: 'There is no registered post.' });
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                userName: news.user.username,
                userAvatar: news.user.avatar
            }
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findById = async (req, res) => {
    try {
        const {id} = req.params;

        const news = await findByIdService(id);

        return res.send({news: {
            id: news._id,
            title: news.title,
            text: news.text,
            banner: news.banner,
            likes: news.likes,
            comments: news.comments,
            name: news.user.name,
            userName: news.user.username,
            userAvatar: news.user.avatar
        }});

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};

const searchByTitle = async (req, res) => {
    try {

        const {title} = req.query;

        const news = await searchByTitleService(title);

        if(news.length === 0){
            return res.status(400).send({message: "There are no posts whit this title."});
        };

        return res.send({results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                userName: item.user.username,
                userAvatar: item.user.avatar
            })),
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const byUser = async (req, res) => {
    try {
        const id = req.userId;
        const news = await byUserService(id);

        return res.send({results: news.map((item) => ({
            id: item._id,
            title: item.title,
            text: item.text,
            banner: item.banner,
            likes: item.likes,
            comments: item.comments,
            name: item.user.name,
            userName: item.user.username,
            userAvatar: item.user.avatar
        })),
    });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const update = async(req, res) => {
    try {
        const { title, text, banner } = req.body;
        const { id } = req.params;

        if (!title && !text && !banner) {
            res.status(400).send({ message: 'Update at least one camp.' });
        }

        const news = await findByIdService(id);

        if(news.user._id != req.userId){
            return res.status(400).send({message: "You didn't create this post."});
        }

        await updateService(id, title, text, banner);

        return res.send({message: 'Post successfully updated!'});

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const erase = async (req, res) => {
    try {
        const { id } = req.params;

        const news = await findByIdService( id );

        if(String(news.user.id) !== req.userId) {
            return res.status(400).send({
                message: "You can't delete this post." 
            });
        }

        await eraseService(id);

        return res.send({message: 'News deleted with sucess.'})
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};

const likeNews = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = req.userId;
    
        const newsLiked = await likeNewsService(id, userId);

        if(!newsLiked){
            await deleteLikeNewsService(id, userId);
            return res.status(200).send({message: 'Like removed.'});
        };
    
        res.send({message: 'Like done successfully.'});

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
    
};

const addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { comment } = req.body;
    
        if(!comment) {
            return  res.status(400).send({ message: 'Write a message to comment.' });
        }

        await addCommentService(id, comment, userId);

        res.send({message: 'Comment successfully completed!'});
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const removeComment = async (req, res) => {
    try {

        const { idNews, idComment } = req.params;

        const userId = req.userId;

        const commentDeleted = await deleteCommentService(idNews, idComment, userId);

        const commentFinder = commentDeleted.comments.find( comment => comment.idComment === idComment );

        if(!commentFinder){
            return res.status(400).send( { message: 'Comment not found. ' } );
        }

        if(commentFinder.comments.userId !== userId){
            return res.status(400).send({message: "You can't delete this comment."});
        }

        res.send({message: 'Comment removed.'});
        
    } catch (error) {

        res.status(500).send( { message: error.message } );

    }
};

export default { create, findAll, topNews, findById, searchByTitle, byUser, update, erase, likeNews, addComment, removeComment };
