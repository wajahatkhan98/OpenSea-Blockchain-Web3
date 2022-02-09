import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0g5vhbge',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skHcvjzTITv87V9EjyPsbZvdh23I9GoJ4eTwwponSQUKcDFfWG6n6LZkLse48e4dcSR8yhlJSUQkBxFeWzEV5I69y7YWPVqcTLNp3SfzOojYpm7Js0b2WMFW1i6rpAwPZSqXcvyQzWX8QiSq1LOhiQx9JfOKjvTUZC60A2P1HhWf28Vu3Dza',
  useCdn: false,
})
