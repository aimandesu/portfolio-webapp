import React, { useState } from "react";

const ProviderContext = React.createContext({
  isProfile: true,
  reverseIsProfile: (toDisplay) => {},
});

export const Provider = (props) => {
  const [isProfile, setisProfile] = useState(true);

  const reverseIsProfile = (toDisplay) => {
    toDisplay == "profile" ? setisProfile(true) : setisProfile(false);
  };

  return (
    <ProviderContext.Provider
      value={{
        isProfile: isProfile,
        reverseIsProfile: reverseIsProfile,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
};

export default ProviderContext;
