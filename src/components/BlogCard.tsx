import React from 'react';
import { 
    BlogPost, 
    UpdateBlogPostInput, 
    CreateCommentInput 
} from '../API';
import { API } from 'aws-amplify';
import { updateBlogPost, createComment } from '../graphql/mutations';
import { create } from 'domain';



type BlogCardProp = {
    blogPost: BlogPost
};

const BlogCard = ( {blogPost}: BlogCardProp ) => {
    const handleLike = async () => {
        const input: UpdateBlogPostInput = {
            id: blogPost.id,
            likes: typeof blogPost.likes === 'number' ? blogPost.likes + 1 : 1
        };

        try {
            const updatedPost = await API.graphql({
                query: updateBlogPost,
                variables: {input}
            });
            console.log(updatedPost);
        } catch (error) {
            console.error(error);
        }
    };

    const handleShare = async () => {
        const input: UpdateBlogPostInput = {
            id: blogPost.id,
            shares: typeof blogPost.shares === 'number' ? blogPost.shares + 1 : 1
        };

        try {
            const updatedPost = await API.graphql({
                query: updateBlogPost,
                variables: {input}
            });
            console.log(updatedPost);
        } catch (error) {
            console.error(error)
        }
    };

    const handleComment = async () => {
        const input: CreateCommentInput = {
            content: "A comment!",
            blogPostId: blogPost.id
        };

        try {
            const newComment = await API.graphql({
                query: createComment,
                variables: {input}
            });
            console.log(newComment);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>{blogPost.title}</h2>
            {blogPost.content ? <p>blogPost.content</p> : <> </>}
            <button className="likeButton" onClick={handleLike}>Like</button>
            <button className="shareButton" onClick={handleShare}>Share</button>
            <button className="commentButton" onClick={handleComment}>Comment</button>
        </div>
    );
};

export default BlogCard