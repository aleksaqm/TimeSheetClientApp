import Accordion from "../components/Accordion";
import ClientHeader from "../components/ClientHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import { DataProvider, useData } from "../hooks/DataContext";
import ClientType from "../types/ClientType";

const TestPage = () => {
  return (
    <>
      <DataProvider<ClientType> url="https://localhost:7138/api/Client">
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
          <ClientSection></ClientSection>
          <StandardFooter></StandardFooter>
        </div>
      </DataProvider>
    </>
  );
};

const ClientSection = () => {
  const { data, isLoading, error, paginationInfo } = useData<ClientType>();

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico clients"></i>Clients
        </h2>
        <ClientHeader />
        <LetterFilter />
        <div className="accordion-wrap clients">
          {isLoading && <div>Loading clients</div>}
          {error && <div>{error}</div>}
          {data?.map((client) => (
            <Accordion key={client.id} object={client} />
          ))}
        </div>
        {paginationInfo !== undefined && (
          <Pagination paginationData={paginationInfo} />
        )}
      </section>
    </div>
  );
};

export default TestPage;
