import { Handler } from '@netlify/functions'
import { Octokit } from 'octokit'

const handler: Handler = async (event) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const response = await octokit.request('PUT /repos/zoltanbedi/pianobar.hu/contents/src/data', {
    owner: 'zoltanbedi',
    repo: 'pianobar.hu',
    path: 'src/data',
    message: 'Add new post',
    committer: {
      name: 'Zoltan Bedi',
      email: 'zoltan.bedi@gmail.com',
    },
    content: event.isBase64Encoded ? event.body : Buffer.from(event.body || '').toString('base64'),
  })
  return {
    statusCode: response.status,
    body: response.data,
  }
}

export { handler }
