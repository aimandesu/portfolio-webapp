import { useContext } from "react";
import ProviderContext from "../Provider/Provider";
import Profile from "../profile/profile";
import Project from "../project/project";

const Content = () => {
  //props here should terima class or some thing like that
  const ctx = useContext(ProviderContext);

  return <>{ctx.isProfile ? <Profile /> : <Project />}</>;
};

export default Content;
