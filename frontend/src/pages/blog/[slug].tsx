import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";

interface PageProps {
    post?: any;
}

const BlogPage: NextPage<PageProps> = ({ post }) => {
    console.log(post)
    return (
        <div>
            Blog
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = (async () => {
    const posts = [
        {
            id: 'id',
            slug: 'slug-text',
            title: "POST TITLE"
        }
    ]
    return {
        paths: posts.map((post)=> {
            return {
                params: {
                    slug: post.slug,
                }
            }
        }),
        fallback: false
    }
})

export const getStaticProps: GetStaticProps = (async (context) => {
    console.log(context, 'Context')
    const post = {
        id: 'id',
        slug: 'slug',
        title: "POST TITLE"
    }
    return {
        props: {
            post,
        },
    }
})


export default BlogPage;