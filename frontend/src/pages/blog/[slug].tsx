import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import LandingLayout from "../../layout/landing.layout";

interface PageProps {
    post?: any;
}

const BlogPage: NextPage<PageProps> = ({ post }) => {
    console.log(post)
    return (
        <LandingLayout>
            Blog
        </LandingLayout>
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