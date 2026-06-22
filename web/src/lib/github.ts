import { Octokit } from '@octokit/rest'
import { Base64 } from 'js-base64'
import { RequestError } from '@octokit/request-error'

// Init
const octokit = new Octokit()

type FetchGithubDataErrorStatus = "unknown" | "file_notfound" | "undefined_file_type"
export class FetchGitHubDataError extends Error {
  readonly status: FetchGithubDataErrorStatus

  constructor(status: FetchGithubDataErrorStatus, options?: ErrorOptions) {
    let message = "Unknown Error"

    switch (status) {
      case "file_notfound":
        message = "File Not Found"
        break
      case "undefined_file_type":
        message = "Undefined File Type"
        break
    }

    super(`FetchGitHubData Error: ${message}`, options)
    this.name = "FetchGitHubDataError"
    this.status = status
  }
}

type FetchGithubDataFolder = {
  type: "dir",
  items: string[] | null
}

type FetchGithubDataFile = { 
  content: string,
  type: "file"
}

export type FetchGithubData = FetchGithubDataFolder | FetchGithubDataFile
export async function fetchGithubData(path: string): Promise<FetchGithubData> {  
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: "foscript",
      repo: "naty",
      path
    })

    // Dir
    if (Array.isArray(data)) {
      return {
        type: "dir",
        items: data.flatMap(item => item.type === "file" || item.type === "dir"
          ? [item.path]
          : []
        )
      }
    }

    switch (data.type) {
      case "submodule":
      case "symlink":
        throw new FetchGitHubDataError("file_notfound")
      case "file":
        return {
          content: Base64.decode(data.content),
          type: "file"
        }
      default:
        throw new FetchGitHubDataError("undefined_file_type")
    }
  } catch(error: unknown) {
    if (error instanceof RequestError) {
      switch (error.status) {
        case 404:
          throw new FetchGitHubDataError("file_notfound")
        default:
          throw new FetchGitHubDataError("unknown", { cause: error })
      }
    }

    throw new FetchGitHubDataError("unknown", { cause: error })
  }
}
