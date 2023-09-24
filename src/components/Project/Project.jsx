import classes from "./Project.module.css";
import ProjectClass from "../Class/ProjectClass";

const Project = () => {
  //put all our project logic in map or array?

  const projects = [
    new ProjectClass("natural hazard assistance", "description", [
      "./Images/Mobile/1.jpg",
      "./Images/chibi1.png",
      "./Images/chibi1.png",
    ]),
    new ProjectClass("family", "description", [
      "./Images/chibi1.png",
      "./Images/chibi1.png",
    ]),
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div className={classes.container} key={index}>
          <div className={`${classes.container_item} ${classes.item_one}`}>
            <h1>{project.name}</h1>
            <h2>{project.project}</h2>
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
