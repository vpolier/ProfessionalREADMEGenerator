// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.appName}
  ${renderLicenseBadge(data.license)}
 ${data.description}
 ## table of content
 * [instalation](#instalation)
 * [usage](#usage)
 * [contributing](#contributing)
## instalation
${data.instalationInstruction}
## usage
${data.usageInformation}
## contributing
${data.contributionGuidelines}
For more questions please reach out to github profile' [${data.githubUserName}](https://github.com/${data.githubUserName}/)
`;
}

module.exports = generateMarkdown;

