var _a;
(_a = document.getElementById("resume form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var fathernameElement = document.getElementById("fathername");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    if (nameElement && fathernameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var father = fathernameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var resumeoutput = "\n    <h2>EditaleResume</h2>\n    <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name_1, "</span></p>\n    <p><strong>Fathername:</strong><span contenteditable=\"true\"> ").concat(father, "</span></p>\n    <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    ");
        var resumeoutputElement = document.getElementById("resumeoutput");
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
        }
        else {
            console.error("result missing");
        }
    }
    else {
        console.error("one more result missing");
    }
});
