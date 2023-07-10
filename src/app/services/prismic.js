import Prismic from '@prismicio/client';


export function getPrismicClient (){
 const prismic = Prismic.Client('https://agend.cdn.prismic.io/api/v2', {
  req,
 })
 return prismic;
}