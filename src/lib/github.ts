import { Octokit } from "@octokit/rest";
import type { GitHubEvent } from "../types/github";

export const getGithubUserEvents = async (username: string = "nikbrunner") => {
  try {
    const octokit = new Octokit({
      auth: import.meta.env.GITHUB_TOKEN,
    });

    const { data } = (await octokit.activity.listPublicEventsForUser({
      username,
      per_page: 10, // Limit the number of events if needed
    })) as unknown as { data: GitHubEvent[] };

    return { data, error: null };
  } catch (error) {
    console.error("Error fetching GitHub events:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const getGitHubUser = async (username: string = "nikbrunner") => {
  try {
    const octokit = new Octokit({
      auth: import.meta.env.GITHUB_TOKEN,
    });

    const { data } = await octokit.users.getByUsername({
      username,
    });

    return { data, error: null };
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
