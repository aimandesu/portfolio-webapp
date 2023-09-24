import { useContext } from "react";
import ProviderContext from "../Provider/Provider";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";

const Content = () => {
  //props here should terima class or some thing like that
  const ctx = useContext(ProviderContext);

  return <>{ctx.isProfile ? <Profile /> : <Project />}</>;
};

export default Content;
