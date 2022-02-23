let licenseURL;
let licenseImg;

function getLicense(answers) {
  if (answers.promptFileUserLicense === "Apache License 2.0") {
    licenseURL = "https://www.apache.org/licenses/LICENSE-2.0";
    licenseImg = "Apache-brightgreen";

} else if (answers.promptFileUserLicense === "GNU General Public License v3.0") {
    licenseURL = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    licenseImg = "GNUv3-green";

} else if (answers.promptFileUserLicense === "MIT License") {
    licenseURL = "https://opensource.org/licenses/MIT";
    licenseImg = "MIT-yellowgreen";

} else if (answers.promptFileUserLicense === "BSD 2-Clause License") {
    licenseURL = "https://opensource.org/licenses/BSD-2-Clause";
    licenseImg = "BSD2-yellow";

} else if (answers.promptFileUserLicense === "BSD 3-Clause License") {
    licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
    licenseImg = "BSD3-yellow";

} else if (answers.promptFileUserLicense === "Boost Software License 1.0") {
    licenseURL = "https://www.boost.org/LICENSE_1_0.txt";
    licenseImg = "Boost-orange";

} else if (answers.promptFileUserLicense === "Creative Commons Zero v1.0 Universal") {
    licenseURL = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
    licenseImg = "CCZero-red";

} else if (answers.promptFileUserLicense === "Eclipse Public License 2.0") {
    licenseURL = "https://www.eclipse.org/legal/epl-2.0/";
    licenseImg = "Eclipse-blue";

} else if (answers.promptFileUserLicense === "GNU Affero General Public License v3.0") {
    licenseURL = "https://www.gnu.org/licenses/agpl-3.0.en.html";
    licenseImg = "GNUAffero-green";

} else if (answers.promptFileUserLicense === "GNU General Public License v2.0") {
    licenseURL = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    licenseImg = "GNUv2-green";

} else if (answers.promptFileUserLicense === "GNU Lesser Public License v2.1") {
    licenseURL = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
    licenseImg = "GNULesser-green";

} else if (answers.promptFileUserLicense === "Mozilla Public License 2.0") {
    licenseURL = "https://www.mozilla.org/en-US/MPL/2.0/";
    licenseImg = "MozillaPublic-blueviolet";

} else {
    licenseURL = "https://unlicense.org/";
    licenseImg = "Unlicense-lightgrey"
};
}

// function to generate markdown for README
function generateMarkdown(answers) {
  getLicense(answers)

  return `# ${answers.promptFileName}`
}


## Table of Contents
1. [Description](this.#description)
2. [Installation](this.#installation)
3. [Usage](this.#usage)
4. [Contact](this.#contact)

### Description

{answers.promptprojectDescription}







module.exports = generateMarkdown;

