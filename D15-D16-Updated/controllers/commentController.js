import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {

    
    try {
        const { text } = req.body;
        const{blogId}=req.params;
        

        // Check if the blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        // Create a new comment
        const comment = await Comment.create({
            text,
            blog: blogId,
            user: req.user._id,
        });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Comments for a Specific Blog
const getCommentsByBlog = async (req, res) => {
    try {
        const { blogId } = req.params;

        // Check if the blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        // Retrieve comments for the blog
        const comments = await Comment.find({ blog: blogId })
            .populate('user', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the comment
        const comment = await Comment.findById(id);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });

        // Check if the user is the author of the comment
        if (comment.user.toString() !== req.user._id) {
            return res.status(403).json({ error: 'Not authorized to delete this comment' });
        }

        // Delete the comment
        await comment.deleteOne();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export { addComment, getCommentsByBlog, deleteComment };
