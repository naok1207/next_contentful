const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
});

export async function getAllPosts() {
  const posts = await client.getEntries({
    content_type: "blogPost"
  }).then(entries => {
    // console.log(entries.items[0].fields.title)
    // console.log(entries.items)
    return entries.items
  })
  // console.log(posts)
  return posts
}

export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    limit: 1,　//個別投稿なので取得数を1に制限
    "fields.slug": slug,　//引数のslugには関数の呼び出し側で文字列で指定
  })
  if (entries.items) {
    return entries.items[0];
  }
}