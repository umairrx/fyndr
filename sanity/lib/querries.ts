import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
  *[_type=="startup" && defined(slug.current)] | order(createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author->{
      _id,
      name,
      username,
      image,
      bio,
      "posts": *[_type == "post" && references(^._id)] {
        _id,
        title,
        slug,
        _createdAt,
        content,
        image
      }
    },
    views,
    description,
    category,
    image
  }
`);

export const STARTUP_BY_ID_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id, 
    title, 
    slug,
    _createdAt,
    author -> {
      _id, 
      name, 
      username, 
      image, 
      bio,
      "posts": *[_type == "post" && references(^._id)] {
        _id,
        title,
        slug,
        _createdAt,
        content,
        image
      }
    }, 
    views,
    description,
    category,
    image,
    pitch
  }
`);

export const STARTUP_VIEWS_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id, views
  }
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0] {
    _id,
    name,
    username,
    image,
    bio,
    "startups": *[_type == "startup" && references(^._id)] {
      _id,
      title,
      slug,
      _createdAt,
      description,
      image
    },
  }
`);
