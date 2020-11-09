// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.licenseBadge}
  ---------------------------------------
  ## Description
  ${data.Description}
  ---------------------------------------
## Installation
${data.Installation}
------------------------------------------
## Usage
${data.Usage}
------------------------------------------
## Licenses
${data.Licenses}
------------------------------------------
## Contributing
${data.Contributing}
------------------------------------------
## Test Instructions
${data.Instructions}
------------------------------------------
## Questions
![profile-picture](${data.avatar}=250x)
${data.Email}
------------------------------------------
## Table of Contents
[Title]
[Description]
[Installation]
[Usage]
[Licenses]
[Contributing]
[Test Instructions]
[Questions]
`;
}

module.exports = generateMarkdown;
