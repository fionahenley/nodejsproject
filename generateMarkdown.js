let licenseURL;
let licenseImg;
let licenseBadge;

function getLicense(answers) {
  if (answers.license === "Apache License 2.0") {
    licenseURL = "Apache_2.0";
    licenseImg = "brightgreen";
 licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`

} else if (answers.license === "GNU General Public License v3.0") {
    licenseURL = "License-GPLv3";
    licenseImg = "green";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "MIT License") {
    licenseURL = "License-MIT";
    licenseImg = "yellowgreen";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "BSD 2-Clause License") {
    licenseURL = "BSD-2-Clause";
    licenseImg = "yellow";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "BSD 3-Clause License") {
    licenseURL = "BSD-3-Clause";
    licenseImg = "yellow";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "Boost Software License 1.0") {
    licenseURL = "LICENSE_1_0";
    licenseImg = "orange";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "Eclipse Public License 2.0") {
    licenseURL = "License-EPL_1.0";
    licenseImg = "blue";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "GNU Affero General Public License v3.0") {
    licenseURL = "License-AGPL_v3";
    licenseImg = "green";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "GNU General Public License v2.0") {
    licenseURL = "License-GPL_v2";
    licenseImg = "green";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else if (answers.license === "Mozilla Public License 2.0") {
    licenseURL = "License-MPL_2.0";
    licenseImg = "blueviolet";
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`


} else {
    licenseURL = "license-Unlicense";
    licenseImg = "lightgrey"
    licenseBadge = `![License](https://img.shields.io/badge/License-${licenseURL}-${licenseImg}.svg)`

};
}

// function to generate markdown for README
function generateMarkdown(answers) {
   getLicense(answers)
console.log(answers);
  return `# ${answers.file} 
  ${licenseBadge}



## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contact](#contact)

### Description

${answers.description};

### Installation 

${answers.license};

### Usage 

${answers.file};

${answers.repo};
### Contact 

${answers.username};

${answers.email};

${answers.github};
`
}




module.exports = generateMarkdown;

