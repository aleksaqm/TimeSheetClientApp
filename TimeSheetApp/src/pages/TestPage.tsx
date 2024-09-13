import Accordion from "../components/Accordion";
import ClientHeader from "../components/ClientHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import useFetch from "../hooks/useFetch";

const TestPage = () => {
  const {
    data: clients,
    isLoading,
    error,
  } = useFetch("https://localhost:7138/api/Client");

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="top-bar"></div>
          <div className="wrapper">
            <a href="/" className="logo">
              <img src="/logo.png" alt="VegaITSourcing Timesheet" />
            </a>
            <UserSettings name="Aleksa Perovic"></UserSettings>
            <NavBar active="Clients"></NavBar>
          </div>
        </header>
        <div className="wrapper">
          <section className="content">
            <h2>
              <i className="ico clients"></i>Clients
            </h2>
            <ClientHeader></ClientHeader>
            <div className="new-member-wrap">
              <div id="new-member" className="new-member-inner">
                <h2>Create new client</h2>
                <ul className="form">
                  <li>
                    <label>Client name:</label>
                    <input type="text" className="in-text" />
                  </li>
                  <li>
                    <label>Address:</label>
                    <input type="text" className="in-text" />
                  </li>
                  <li>
                    <label>City:</label>
                    <input type="text" className="in-text" />
                  </li>
                  <li>
                    <label>Zip/Postal code:</label>
                    <input type="text" className="in-text" />
                  </li>
                  <li>
                    <label>Country:</label>
                    <select>
                      <option>Select country</option>
                    </select>
                  </li>
                </ul>
                <div className="buttons">
                  <div className="inner">
                    <a href="javascript:;" className="btn green">
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <LetterFilter></LetterFilter>
            <div className="accordion-wrap clients">
              {isLoading && <div>Loading clients</div>}
              {error && <div>{error}</div>}
              {clients &&
                clients.map((client: any) => (
                  <Accordion title={client.name}></Accordion>
                ))}
            </div>
            <div className="pagination">
              <ul>
                <li>
                  <a href="javascript:;">1</a>
                </li>
                <li>
                  <a href="javascript:;">2</a>
                </li>
                <li>
                  <a href="javascript:;">3</a>
                </li>
                <li className="last">
                  <a href="javascript:;">Next</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

export default TestPage;
