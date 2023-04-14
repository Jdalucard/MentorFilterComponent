import { useContext } from "react";
import { Contextprogramer } from "../context/ContextUser";
import icondelete from "../DB/listings/images/icon-remove.svg";

const ProgramerFilter = () => {
  const { filterList, clearFilterList, clearAll } =
    useContext(Contextprogramer);

  return (
    <>
      {filterList.length > 0 ? (
        <header className="filter">
          <div className="map">
            {filterList.map((buton, index) => {
              return (
                <>
                  <div
                    className="filter-container"
                    onClick={() => clearFilterList(buton)}
                  >
                    <button key={index} className="boton-filter">
                      {buton}
                    </button>
                    <img src={icondelete} alt="delete" />
                  </div>
                </>
              );
            })}
          </div>

          <div>
            <button onClick={() => clearAll()} className="clear-all">
              Clear All
            </button>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
};

export default ProgramerFilter;
