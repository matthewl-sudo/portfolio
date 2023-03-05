import React from 'react';
import Container from '../components/Container';
import { urlFor } from '../lib/sanityClient'
import '../styles/blog.css'

const BlogLayout = ({props, children}) => {
    const {author, categories, mainImage, title, minutesToRead, publishedAt: date, metaDescription: description} = props;
    // console.log(post);
    const metaProps = {title, description, image:urlFor(mainImage).url(), date}
  return (
        <Container customMeta={metaProps}>
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap m-4">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ maxWidth: '45em'}}>
                            {/* <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-lingrad"
                                style={{backgroundImage: 'linearGradient(180deg, transparent, rgba(0,0,0,0.7))'}}></div> 
                            <img src={urlFor(mainImage).url()} alt={mainImage.caption} className="absolute left-0 top-0 w-full h-full z-0" /> */}
                            <div className="p-4 absolute bottom-0 left-0 z-20">
                                <h1 className="text-3xl px-10 font-semibold mx-2 text-gray-100 leading-tight backdrop-blur-xl bg-opacity-60">{title}</h1>
                                <a href="#"
                                className="px-4 py-1 mx-2 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{categories[0].title}</a>
                            </div>
                            <div className='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative'>
                                <img src={urlFor(mainImage).url()} alt={mainImage.caption} className=" left-0 top-0 w-50 h-50 z-0" /> 
                                <p className="font-semibold text-400 text-sm"> Author: {author.name} </p>
                                <p className="font-semibold text-400 text-xs">Mintues to Read: {minutesToRead} </p>
                                <p className="font-semibold text-400 text-xs">Published: {new Date(date).toDateString()} </p>
                            </div>
                        </div>
                        <article className="px-4 lg:px-0 max-w-screen-md mx-auto text-lg leading-relaxed" style={{ maxWidth: '45em'}}>
                            {/* <h1 className="text-3xl font-semibold mb-4 mt-4">{title}</h1>
                            <p className="pb-3">{description}</p> */}
                            {children}
                            {/* <p className='pb-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus tempore quaerat. Officia sequi cum ratione similique, libero accusamus, animi nihil adipisci voluptate rerum ut asperiores assumenda ea perspiciatis nesciunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus tempore quaerat. Officia sequi cum ratione similique, libero accusamus, animi nihil adipisci voluptate rerum ut asperiores assumenda ea perspiciatis nesciunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus tempore quaerat. Officia sequi cum ratione similique, libero accusamus, animi nihil adipisci voluptate rerum ut asperiores assumenda ea perspiciatis nesciunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus tempore quaerat. Officia sequi cum ratione similique, libero accusamus, animi nihil adipisci voluptate rerum ut asperiores assumenda ea perspiciatis nesciunt.
                            </p> */}
                            {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/> */}
                        </article>
                    </div>
                </div>
            </div>   
        </Container>
  )
}

export default BlogLayout;