import React, { useState, useEffect, createContext } from "react";
import { jobListData } from "../DB/listings/data.js";

/* creo el contexto */
export const Contextprogramer = createContext();

const ContextUser = ({ children }) => {
  const [list, setlist] = useState(jobListData);
  const [filterList, setFilterList] = useState([]);

  /* addto list */

  const addToFilterList = (filterTitle) => {
    const existingItem = filterList.find((title) => {
      return title === filterTitle;
    });

    if (!existingItem) {
      setFilterList((prevState) => [...prevState, filterTitle]);
    }
  };

  /* delete label */
  const clearFilterList = (filterTitle) => {
    const filterTagExist = filterList.find((item) => item === filterTitle);

    if (filterTagExist) {
      const filteredTitle = filterList.filter((item) => item !== filterTitle);
      setFilterList(filteredTitle);
    }
  };

  /* delete all */
  const clearAll = () => {
    setFilterList([]);
    setlist(jobListData);
  };

  /* filter list */
  const filteredJobList = () => {
    if (filterList.length > 0) {
      const filterJobs = jobListData.filter((job) => {
        return filterList.every((title) => {
          const language = job.languages.find((language) => language === title);
          const tool = job.tools.find((tool) => tool === title);
          return job.role === title || job.level === title || language || tool;
        });
      });
      setlist(filterJobs);
    } else {
      setlist(jobListData);
    }
  };

  useEffect(() => {
    filteredJobList();
  }, [filterList]);

  return (
    <>
      {/* return el contexto */}
      <Contextprogramer.Provider
        value={{
          list,
          filterList,
          addToFilterList,
          clearFilterList,
          clearAll,
        }}
      >
        {children}
      </Contextprogramer.Provider>
    </>
  );
};

export default ContextUser;
