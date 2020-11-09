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
[Title](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#g)
[Description](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#description)
[Installation](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#installation)
[Usage](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#usage)
[Licenses](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#licenses)
[Contributing](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#contributing)
[Test Instructions](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#test-instructions)
[Questions](https://github.com/NPitroff/Nicolai_Node_ReadMe/blob/master/readme.md#questions)
`;
}

module.exports = generateMarkdown;
