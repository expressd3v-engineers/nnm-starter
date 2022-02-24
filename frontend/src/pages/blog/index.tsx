import React from 'react';
import {NextPage} from "next";

interface PageProps {
    posts?: any[];
}

const BlogsPage: NextPage<PageProps> = ({ posts }) => {
    return (
        <div>
            BLOGS
        </div>
    );
};

export async function getStaticProps() {
    const posts = [
        {
            title: "POST TITLE"
        }
    ]
    return {
        props: {
            posts,
        },
    }
}


export default BlogsPage;