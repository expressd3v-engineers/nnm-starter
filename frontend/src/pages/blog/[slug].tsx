import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import LandingLayout from "../../layout/landing.layout";
import Head from "next/head";
import Container from "../../components/style/paper/container/index.style";

interface PageProps {
    post: any;
}

const BlogPage: NextPage<PageProps> = ({ post }) => {
    console.log(post)
    return (
        <LandingLayout>
            <Head>
                <title>{post.title} | NNM STARTER BLOG</title>
                <meta name="description" content={post.short}/>
            </Head>
            <Container>
                {post.title}
            </Container>
        </LandingLayout>
    );
};

export const getStaticPaths: GetStaticPaths = (async () => {
    const posts = [
        {
            id: 'id',
            slug: 'slug-text',
            title: "POST TITLE",
            short: "Short"
        },
        {
            id: 'id1',
            slug: 'slug-text1',
            title: "POST TITLE1",
            short: "Short1"
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

export const getStaticProps: GetStaticProps = (async (context: any) => {
    console.log(context)
    const posts = [
        {
            id: 'id',
            slug: 'slug-text',
            title: "POST TITLE",
            short: "Short"
        },
        {
            id: 'id1',
            slug: 'slug-text1',
            title: "POST TITLE1",
            short: "Short1"
        }
    ]
    return {
        props: {
            post: posts.filter((post) => post.slug === context.params.slug)[0]
        },
    }
})


export default BlogPage;