// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../lib/sanityClient";
import { blogPostsQuery, getPostsByCategory } from "../../lib/queries";

export default async function blogpost(req, res) {
  const {start, end} = req.query;
  if (isNaN(Number(start) || isNaN(Number(end)))) {
    return res.status(400).end;
  }
  // res.status(200).json({ name: 'John Doe' })
  const {blogPosts, total,  allCategories} = await loadData(start, end);
  res.status(200).json({blogPosts, total,  allCategories});
  // console.log('api',blogPosts);
}

export async function loadData(start, end){
  const {blogPosts, total, allCategories} = await client.fetch(blogPostsQuery(start, end));
  return {
    blogPosts, 
    total,
    allCategories
  }
}

// export async function loadByCategory(category){
//   const {blogPosts, total, allCategories} = await client.fetch(getPostsByCategory(category));
//   return {
//     blogPosts, 
//     total,
//     allCategories
//   }
// }
