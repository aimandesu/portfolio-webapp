import ProjectBuilder from "./ProjectBuilder";
import ProjectClass from "../Class/ProjectClass";
import classes from "./Project.module.css";

const Project = () => {
  //put all our project logic in map or array?

  const mobile = [
    new ProjectClass(
      "Natural Hazard Assistance Hub",
      "Natural Hazard Assistance Hub is mobile application built on Flutter",
      [
        "./Images/Mobile/natural_hazard_hub/1.png",
        "./Images/Mobile/natural_hazard_hub/2.png",
        "./Images/Mobile/natural_hazard_hub/3.png",
        "./Images/Mobile/natural_hazard_hub/4.png",
        "./Images/Mobile/natural_hazard_hub/5.png",
        "./Images/Mobile/natural_hazard_hub/6.png",
        "./Images/Mobile/natural_hazard_hub/7.png",
        "./Images/Mobile/natural_hazard_hub/8.png",
        "./Images/Mobile/natural_hazard_hub/9.png",
        "./Images/Mobile/natural_hazard_hub/10.png",
        "./Images/Mobile/natural_hazard_hub/11.png",
        "./Images/Mobile/natural_hazard_hub/12.png",
      ],
      "https://github.com/aimandesu/fyp-project",
      ""
    ),
    new ProjectClass(
      "Notely",
      "Notely is a mobile application built on Flutter",
      [
        "./Images/Mobile/NoteApp/1.png",
        "./Images/Mobile/NoteApp/2.png",
        "./Images/Mobile/NoteApp/3.png",
        "./Images/Mobile/NoteApp/4.png",
      ],
      "https://github.com/aimandesu/notes-app",
      ""
    ),
    new ProjectClass(
      "Rents Car",
      "Rents car is a mobile application built on Jetpack Compose",
      [
        "./Images/Mobile/CarRents/1.png",
        "./Images/Mobile/CarRents/2.png",
        "./Images/Mobile/CarRents/3.png",
        "./Images/Mobile/CarRents/4.png",
      ],
      "https://github.com/aimandesu/CSC557",
      ""
    ),
    new ProjectClass(
      "Contact",
      "Contact is a mobile application built on Flutter",
      [
        "./Images/Mobile/Contact/1.png",
        "./Images/Mobile/Contact/2.png",
        "./Images/Mobile/Contact/3.png",
        "./Images/Mobile/Contact/4.png",
        "./Images/Mobile/Contact/5.png",
        "./Images/Mobile/Contact/6.png",
        "./Images/Mobile/Contact/7.png",
        "./Images/Mobile/Contact/8.png",
        "./Images/Mobile/Contact/9.png",
        "./Images/Mobile/Contact/10.png",
      ],
      "https://github.com/aimandesu/flutter-assessment",
      ""
    ),
  ];
  const web = [
    new ProjectClass(
      "Natural Hazard Assistance Hub - Admin",
      "Natural Hazard Assistance Hub - Admin is a flutter web application built on Flutter",
      [
        "./Images/Web/natural_hazard_hub/1.jpg",
        "./Images/Web/natural_hazard_hub/2.jpg",
        "./Images/Web/natural_hazard_hub/3.jpg",
        "./Images/Web/natural_hazard_hub/4.jpg",
        "./Images/Web/natural_hazard_hub/5.jpg",
        "./Images/Web/natural_hazard_hub/6.jpg",
      ],
      "https://github.com/aimandesu/fyp-project",
      ""
    ),
    new ProjectClass(
      "Cancer Detection",
      "Cancer Detection is a web application built on streamlit",
      [
        "./Images/Web/cancer_detection/1.jpg",
        "./Images/Web/cancer_detection/2.jpg",
        "./Images/Web/cancer_detection/3.jpg",
        "./Images/Web/cancer_detection/4.jpg",
        "./Images/Web/cancer_detection/5.jpg",
        "./Images/Web/cancer_detection/6.jpg",
      ],
      "https://github.com/aimandesu/streamlit",
      ""
    ),
  ];

  const desktop = [];

  return (
    <>
      <h1 className={classes.title}>Mobile App</h1>
      <ProjectBuilder projects={mobile} />
      <h1 className={classes.title}>Web App</h1>
      <ProjectBuilder projects={web} />
      <h1 className={classes.title}>Desktop App</h1>
      <ProjectBuilder projects={desktop} />
    </>
  );
};

export default Project;
