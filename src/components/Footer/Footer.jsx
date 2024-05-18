import classname from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classname.footer}>
        <div className={classname.footer_item}>Made with ReactJs @ 2024</div>
        <div className={`${classname.footer_item} ${classname.attribute}`}>
          <a
            href="https://www.flaticon.com/free-icons/project"
            title="project icons"
            target="_blank"
          >
            Project icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
