import { Octokit } from '@octokit/rest'

export async function fetchGitHubData(path: string) {
  const octokit = new Octokit()

  const response = await octokit.rest.repos.getContent({
    owner: "foscript",
    repo: "naty",
    path
  })

  return response.data
}
