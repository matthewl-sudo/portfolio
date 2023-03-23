const postFields = `
mainImage,
publishedAt,
minutesToRead,
metaDescription,
"categories": categories[] ->   {
    title,
    _ref
},
slug,
title,
"author":author->{
    name,
}`;

const getCategories = `
*[_type == "category"]{
    _id,
    title, 
}`;

const getTotal = `count(*[_type == "post"])`;

export const blogPostsQuery = (start, end) =>  `{
    "blogPosts": *[_type == "post"] | order(publishedAt desc) [${start} ... ${end}]{
      ${postFields}
    },
    "total" : ${getTotal},
    "allCategories": ${getCategories}
}`;

export const getBlogPostSlugPaths = `
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

// get all posts by category 
export const getPostsByCategoryQuery = (category) => `{
"blogPosts": *[_type == "post"]{
    "cate": categories[0..3]{
        _ref,
        ...
    },
    ${postFields}
    }['${category}' in cate[]._ref][],
"total": ${getTotal},
"allCategories": ${getCategories},
}`;