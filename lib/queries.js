const postFields = `
mainImage,
publishedAt,
minutesToRead,
metaDescription,
"categories": categories[] ->   {
    title
},
slug,
title,
"author":author->{
    name,
}`;

export const blogPostsQuery = (start, end) =>  `{
    "blogPosts": *[_type == "post"] | order(publishedAt desc) [${start} ... ${end}]{
      ${postFields}
    },
    "total" : count(*[_type == "post"])
}`;

export const blogPostSlugsQuery = `
*[_type == "post"]{
    slug {
        current
    }
}`;

export const getBlogBySlugQuery = (slug) => `
*[_type == "post" && slug.current == '${slug}'][0]{
    ...,
    ${postFields}
}`;