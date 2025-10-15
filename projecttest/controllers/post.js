exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    const post = new Post({
        title: title,
        content: content
    });

    post.save()
    .then(postSaved => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: postSaved
        });
    }).catch(err => {
        console.log(err);
    });
}



exports.getPosts = (req, res, next) => {
    post.find()
    .then(foundPosts => {
        res.json({
            message:"all posts",
            posts: foundPosts
        });
    });
};