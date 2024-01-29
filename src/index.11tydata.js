
const EleventyFetch = require('@11ty/eleventy-fetch')
module.exports = async function () {
  const result = {}
  
  try {
    result['directus'] = (await EleventyFetch(`${process.env.DIRECTUS_URL}/graphql`, {
      "duration":"1s",
      "type":"json",
      fetchOptions: {
        headers: {
          'Content-Type': `application/json`,
          'Authorization': `Bearer ${process.env.DIRECTUS_TOKEN}`,
        },
        method: 'POST',
        body: JSON.stringify({
          query: `query {
            posts {
              title
            }
        }`)
    throw e
  }

  return result
}
  
