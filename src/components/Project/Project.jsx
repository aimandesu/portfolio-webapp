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
        "./Images/Mobile/natural_hazard_hub/0.png",
        "./Images/Mobile/natural_hazard_hub/1.png",
        "./Images/Mobile/natural_hazard_hub/2.png",
        "./Images/Mobile/natural_hazard_hub/3.png",
      ],
      "https://www.youtube.com/",
      "youtube.com"
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
      "youtube.com",
      "youtube.com"
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
      "youtube.com",
      "youtube.com"
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
      "youtube.com",
      "youtube.com"
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
      ],
      "youtube.com",
      "youtube.com"
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
