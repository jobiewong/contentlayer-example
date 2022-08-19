// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/content/${post._raw.flattenedPath}`,
    },
  },
}))

// the project type would go here

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})

// The below code fixes the error but does not allow for multiple directories in the /content folder

// import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// export const Post = defineDocumentType(() => ({
//   name: 'Post',
//   filePathPattern: `**/*.mdx`,
//   fields: {
//     title: {
//       type: 'string',
//       description: 'The title of the post',
//       required: true,
//     },
//     date: {
//       type: 'date',
//       description: 'The date of the post',
//       required: true,
//     },
//   },
//   computedFields: {
//     url: {
//       type: 'string',
//       resolve: (post) => `/content/posts/${post._raw.flattenedPath}`,
//     },
//   },
// }))

// export default makeSource({
//   contentDirPath: 'content/posts',
//   documentTypes: [Post],
// })