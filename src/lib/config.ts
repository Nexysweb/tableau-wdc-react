export const version = process.env.REACT_APP_VERSION || 'unset_version';
export const sha = process.env.REACT_APP_GIT_SHA || 'unset_sha';
const ghUrl = 'https://github.com/Nexysweb/tableau-wdc-react';
export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  url: ghUrl,
  version: `${ghUrl}/releases/tag/${version}`
};
