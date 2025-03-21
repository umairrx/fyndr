import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`
  *[_type=="startup" && defined(slug.current)] | order(createdAt desc) {
  _id,
  title,
  slug,
  createdAt,
  author->{
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image,
}
`);


