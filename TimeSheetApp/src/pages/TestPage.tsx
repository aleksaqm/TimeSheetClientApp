import Accordion from "../components/Accordion";
import ClientHeader from "../components/ClientHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";

const TestPage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="top-bar"></div>
          <div className="wrapper">
            <a href="/" className="logo">
              <img src="../../public/logo.png" alt="VegaITSourcing Timesheet" />
            </a>
            <ul className="user right">
              <li>
                <a>Sladjana Miljanovic</a>
                <div className="invisible"></div>
                <div className="user-menu">
                  <ul>
                    <li>
                      <a href="javascript:;" className="link">
                        Change password
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" className="link">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" className="link">
                        Export all data
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="last">
                <a href="javascript:;">Logout</a>
              </li>
            </ul>
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
              <Accordion title="First Client"></Accordion>
              <Accordion title="Second Client"></Accordion>
              <Accordion title="Third Client"></Accordion>
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
        <footer className="footer">
          <div className="wrapper">
            <ul>
              <li>
                <span>Copyright. VegaITSourcing All rights reserved</span>
              </li>
            </ul>
            <ul className="right">
              <li>
                <a href="javascript:;">Terms of service</a>
              </li>
              <li>
                <a href="javascript:;" className="last">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TestPage;
