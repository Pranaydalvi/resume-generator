function generateResume() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const phone = document.getElementById("phone").value;
    const gmail = document.getElementById("gmail").value;
    const summary = document.getElementById("summaryText").value;
    const education1 = document.getElementById("educationDetails1").value;
    const education2 = document.getElementById("educationDetails2").value;
    const skills1 = document.getElementById("skillsList1").value;
    const skills2 = document.getElementById("skillsList2").value;
    const skills3 = document.getElementById("skillsList3").value;
    const skills4 = document.getElementById("skillsList4").value;
    const skills5 = document.getElementById("skillsList5").value;
    const skills6 = document.getElementById("skillsList6").value;
    const skills7 = document.getElementById("skillsList7").value;
    const skills8 = document.getElementById("skillsList8").value;
    const skills9 = document.getElementById("skillsList9").value;
    const skills10 = document.getElementById("skillsList10").value;
    const project1 = document.getElementById("projectsList1").value;
    const project2 = document.getElementById("projectsList2").value;
    const project3 = document.getElementById("projectsList3").value;
    const certification1 = document.getElementById("certificationsList1").value;
    const certification2 = document.getElementById("certificationsList2").value;
    const certification3 = document.getElementById("certificationsList3").value;
    const certification4 = document.getElementById("certificationsList4").value;
    const certification5 = document.getElementById("certificationsList5").value;
    const references = document.getElementById("referencesText").value;
  
    const template = document.getElementById("template").value;
  
    // Seting data in localStorage for selected template
    localStorage.setItem('resumeData', JSON.stringify({
      name,
      profession,
      phone,
      gmail,
      summary,
      education1,
      education2,
      skills1,
      skills2,
      skills3,
      skills4,
      skills5,
      skills6,
      skills7,
      skills8,
      skills9,
      skills10,
      project1,
      project2,
      project3,
      certification1,
      certification2,
      certification3,
      certification4,
      certification5,
      references
    }));
  
    // Openning new tab with the selected template
    window.open(template, '_blank');
  }
  