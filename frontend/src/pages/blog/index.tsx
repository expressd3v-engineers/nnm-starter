import React from 'react';
import {NextPage} from "next";
import LandingLayout from "../../layout/landing.layout";

interface PageProps {
    posts?: any[];
}

const BlogsPage: NextPage<PageProps> = ({posts}) => {
    return (
        <LandingLayout>
            BLOGS
        </LandingLayout>
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