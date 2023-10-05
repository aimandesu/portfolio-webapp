import classes from "./Project.module.css";
import ProjectClass from "../Class/ProjectClass";

const Project = () => {
  //put all our project logic in map or array?

  const projects = [
    new ProjectClass(
      "Mobile",
      "Natural Hazard Assistance Hub",
      "Natural Hazard Assistance is mobile application built on FLutter framework",
      [
        "./Images/Mobile/1.jpg",
        "./Images/chibi1.png",
        "./Images/chibi1.png",
        "./Images/Mobile/1.jpg",
      ],
    ),
    new ProjectClass(
      "Mobile",
      "Family",
      "Family is a mobile application built on Flutter framework",
      ["./Images/chibi1.png", "./Images/chibi1.png"],
    ),
    new ProjectClass(
      "Mobile",
      "Notely",
      "Notely is a mobile application built on Flutter framework",
      ["./Images/Mobile/1.jpg"],
    ),
    new ProjectClass(
      "Mobile",
      "Rents Car",
      "Rents car is a mobile application built on Jetpack Compose",
      ["./Images/Mobile/1.jpg"],
    ),
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div className={classes.container} key={index}>
          {project.type == "Mobile" ? <h1></h1> : <h1></h1>}{" "}
          {/*this one bnda tu buh kt mobile or web punya not here*/}
          {/*this here needs to first make an Mobile and WebApp jsx file, then after that pass rpops to that*/}
          <div className={`${classes.container_item} ${classes.item_one}`}>
            <h1>{project.name}</h1>
            <p>{project.project}</p>
          </div>
          <div className={`${classes.container_item} ${classes.item_two}`}>
            {project.photos.map((photo, photoIndex) => (
              <div key={photoIndex} className={classes.part_images}>
                <img src={photo} alt={photoIndex} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
