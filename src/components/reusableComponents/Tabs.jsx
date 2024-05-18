import React from "react";
import TabsClass from "./TabsClass";
import classes from "./Tabs.module.css";
import { useState } from "react";

export const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className={classes.tab_list}>
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`${classes.tab} ${
              activeTab === index ? classes.active : ""
            }`}
            onMouseEnter={() => setActiveTab(index)}
            onTouchStart={() => setActiveTab(index)}
          >
            <div className={classes.option}>
              <div className={classes.option_item}>
                <p> {tab.tabTitle}</p>
              </div>
              <div className={classes.option_item}>
                {activeTab === index && tab.tapableButton && (
                  <span
                    onClick={tab.tapableButton}
                    className="material-symbols-outlined"
                  >
                    download
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.tab_content}>{props.tabs[activeTab].content}</div>
    </>
  );
};
