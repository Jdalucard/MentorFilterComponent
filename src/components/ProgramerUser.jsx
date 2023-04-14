import image from "../DB/listings/images/bg-header-desktop.svg";
import { Contextprogramer } from "../context/ContextUser";
import { useContext } from "react";
import ProgramerFilter from "./ProgramerFilter";
import "./Style.css";

export const ProgramerUser = () => {
  /* uso contexto */
  const { list, addToFilterList } = useContext(Contextprogramer);

  return (
    <>
      <main className="container-global">
        <header className="nav">
          <img src={image} alt="BGHeader" />
        </header>

        <article className="container-card-filter">
          <ProgramerFilter />
          <div className="container-user">
            {list.map((user) => {
              return (
                <div className="card-user" key={user.id}>
                  <div className="container-image">
                    <img src={user.logo} alt={user.company} />
                  </div>
                  <div className="container-body">
                    <table className="table-body">
                      <tbody>
                        <tr className="box">
                          <td>{user.company}</td>
                          {user.new && <p>New!</p>}
                          {user.featured && <p>Featured</p>}
                        </tr>
                        <tr>
                          <td>
                            <h3>{user.position}</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <ul className="list">
                              <li>{user.postedAt}</li>
                              <li>{user.contract}</li>
                              <li>{user.location}</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="card-fotter">
                      <button onClick={() => addToFilterList(user.role)}>
                        {user.role}
                      </button>
                      <button onClick={() => addToFilterList(user.level)}>
                        {user.level}
                      </button>

                      {user.languages.map((language) => {
                        return (
                          <button
                            key={language}
                            onClick={() => addToFilterList(language)}
                          >
                            {language}
                          </button>
                        );
                      })}

                      {user.tools.map((tool) => {
                        return (
                          <button
                            key={tool}
                            onClick={() => addToFilterList(tool)}
                          >
                            {tool}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
};
