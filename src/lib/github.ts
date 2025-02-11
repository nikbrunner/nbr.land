import { Octokit } from "@octokit/rest";
import type { GitHubEvent } from "../types/github";

/** Currently on return push events */
export const getGithubPushEvents = async (
  username: string = "nikbrunner",
  limit: number = 25,
) => {
  try {
    const octokit = new Octokit({
      auth: import.meta.env.GITHUB_TOKEN,
    });

    const { data } = (await octokit.activity.listPublicEventsForUser({
      username,
      per_page: limit,
    })) as unknown as { data: GitHubEvent[] };

    const pushEvents = data.filter((event) => event.type === "PushEvent");

    const uniqueEvents = pushEvents.filter(
      (event, index, self) =>
        index ===
        self.findIndex(
          (e) =>
            e.payload.commits[0].message === event.payload.commits[0].message,
        ),
    );

    return { data: uniqueEvents, error: null };
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
