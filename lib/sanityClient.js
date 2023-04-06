import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, //'false' if you want to ensure fresh data
}
);
export default client;

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
