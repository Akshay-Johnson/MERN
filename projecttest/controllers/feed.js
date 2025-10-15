exports.getPosts = (req, res, next) => {
    Post.find()
    .then(foundPosts => {
        res.json({
            message:"all posts",
            posts: foundPosts
        });
    });
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    //create new post
    const post = new Post({
        title: title,
        content: content
    });
    //save post to database
    post.save()
    .then(postSaved => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: postSaved
        });
    })
    .catch(err => 
        console.log(err));
    }

