import { Handler } from '@netlify/functions'
import { Octokit } from 'octokit'

const handler: Handler = async (event) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const data = JSON.parse(event.body || '')
  const path = `src/data/${data.id}.json`
  let sha

  console.log('JSON parsed. data: ', data)
  try {
    const getResponse = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'zoltanbedi',
      repo: 'pianobar.hu',
      path,
    })
    console.log('getResponse success', getResponse)
    sha = Array.isArray(getResponse.data) ? getResponse.data[0].sha : getResponse.data.sha
  } catch {
    console.log('getResponse failed')
    sha = undefined
  }

  console.log('Creating new file')

  const putResponse = await octokit.request(`PUT /repos/{owner}/{repo}/contents/{path}`, {
    owner: 'zoltanbedi',
    repo: 'pianobar.hu',
    path,
    message: 'Add new post',
    committer: {
      name: 'Zoltan Bedi',
      email: 'zoltan.bedi@gmail.com',
    },
    content: event.isBase64Encoded ? event.body! : Buffer.from(event.body || '').toString('base64'),
    sha,
  })
  console.log('putResponse', putResponse)

  return {
    statusCode: putResponse.status,
    body: JSON.stringify(putResponse.data),
  }
}

export { handler }
