import classes from "./Left.module.css";

const Left = () => {
  const diplomaCert = "./Images/Education/Diploma/diploma.pdf";

  const openPDF = (location) => {
    window.open(location, "_blank");
  };
  return (
    <>
      <div className={classes.left_container}>
        <div className={`${classes.container_item} ${classes.container_first}`}>
          <img srcSet="./Images/profile.jpg" alt="" />
        </div>
        {/* <div className={`${classes.container_item} ${classes.container_fifth}`}>
          <span
            onClick={() => openPDF(diplomaCert)}
            class="material-symbols-outlined"
          >
            description
          </span>
        </div> */}
        <div
          className={`${classes.container_item} ${classes.container_fourth}`}
        >
          <h1>Aiman Afiq bin Esam</h1>
          <p>Mobile & Web App Developer</p>
          <p>Hometown | Station 18, Ipoh, Perak</p>
        </div>
        <div className={`${classes.container_item} ${classes.container_two}`}>
          <h1>Education Information</h1>
          <p>Education | UiTM Merbok & Tapah</p>
          <p>Diploma | Diploma in Computer Science</p>
          <p>Degree | Bachelor of Computer Science (HONS.)</p>
          <p>CGPA | 3.37</p>
        </div>
        <div className={`${classes.container_item} ${classes.container_three}`}>
          <h1>Technologies Known</h1>
          <p>Mobile Development - Compose, Flutter</p>
          <p>Web App Development - React Js</p>
          <p>Backend - Express Js, Laravel</p>
          <p>Database - MySQL, SQLite</p>
        </div>
      </div>
    </>
  );
};

export default Left;
