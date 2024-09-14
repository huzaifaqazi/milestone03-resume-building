document.getElementById(`resume form`)?.addEventListener(`submit` , function(event) {
    event.preventDefault();

    const nameElement = document.getElementById(`name`) as HTMLInputElement;
    const fathernameElement = document.getElementById(`fathername`) as HTMLInputElement;
    const emailElement = document.getElementById(`email`) as HTMLInputElement;
    const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
    const educationElement = document.getElementById(`education`) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(`skills`) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(`experience`) as HTMLTextAreaElement;

if (nameElement && fathernameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement){
    const name = nameElement.value;
    const father = fathernameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const skills = skillsElement.value;
    const experience = experienceElement.value;


    const resumeoutput = `
    <h2>EditaleResume</h2>
    <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
    <p><strong>Fathername:</strong><span contenteditable="true"> ${father}</span></p>
    <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    `;
    const resumeoutputElement = document.getElementById(`resumeoutput`)
    if (resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput
    } else {
        console.error(`result missing`)
    }
    } else {
        console.error(`one more result missing`)
}

})