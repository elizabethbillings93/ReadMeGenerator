// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ('');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return('');
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return("");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  -[Why was it built?](#build)
  -[What problem does it solve?](#problem)
  -[What did you learn?](#learn)
  -[What is your favorite fruit?](#fruit)

  ## Why was it built?:
  ${data.build}
  ## What problem does it solve?](#problem)
  ${data.problem}
  ## What did you learn?(#learn)
  ${data.problem}
  ## What is your favorite fruit?(#fruit)
  ${data.fruit}

`;
}

module.exports = generateMarkdown;
