// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
    return ""
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return (
            `* [License](#license-📠)`
          )
        }
        return ""
    }

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License 📠
            Copyright @ ${license}. All rights reserved.
            
            Licensed under the ${license} license.`
        )
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description 📝

  ${data.description}

  ## Table of Contents 📖

  * [Installations](#installations-💻)

  * [Usage](#usage-🏆)

  * [Contributors](#contributors-👥)

  * [Tests](#tests-🧪)

  * [Questions](#questions-🤔)

  ${renderLicenseLink(data.license)}

  ## Installations  💻

  To install dependencies, run these commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage 🏆

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors 👥

  ${data.contributors}

  ## Tests 🧪

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions 🤔

  For additional questions, contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}

module.exports = generateMarkdown;