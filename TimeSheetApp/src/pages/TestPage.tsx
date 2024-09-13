import Accordion from "../components/Accordion";
import ClientHeader from "../components/ClientHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import useFetch from "../hooks/useFetch";
import ClientType from "../types/ClientType";

const TestPage = () => {
  const {
    data: clients,
    isLoading,
    error,
    paginationInfo,
  } = useFetch<ClientType>("https://localhost:7138/api/Client");

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

            <LetterFilter></LetterFilter>
            <div className="accordion-wrap clients">
              {isLoading && <div>Loading clients</div>}
              {error && <div>{error}</div>}
              {clients &&
                clients?.map((client: any) => (
                  <Accordion object={client}></Accordion>
                ))}
            </div>
            <Pagination paginationInfo={paginationInfo}></Pagination>
          </section>
        </div>
        <StandardFooter></StandardFooter>
      </div>
    </>
  );
};

export default TestPage;
