import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import  client from '../../lib/sanityClient'
import { blogPostSlugsQuery, getBlogBySlugQuery } from '../../lib/queries'
import '../../styles/blog.css';
import BlogLayout from '../../layouts/blogLayout';

const BlogArticle = ({post, source}) => {
    // console.log(post);
  return (
        <BlogLayout props={post}>
            <MDXRemote {...source} />
        </BlogLayout>
  )
}

export default BlogArticle;

export async function getStaticPaths(){
    const posts = await client.fetch(blogPostSlugsQuery);
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug.current
            } 
        })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({params: {slug}}) {

    const post = await client.fetch(getBlogBySlugQuery(slug));
    // MDX text - can be from a local file, database, anywhere
    const source = post.body
    const mdxSource = await serialize(source)
    return {
        props: {
            post,
            source: mdxSource 
        }
    }
}