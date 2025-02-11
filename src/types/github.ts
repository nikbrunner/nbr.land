export type GitHubCommit = {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
  };
  distinct: boolean;
  url: string;
};

export type PushEventPayload = {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: GitHubCommit[];
};

export type GitHubEvent = {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: PushEventPayload;
  public: boolean;
  created_at: string;
};
