import Accordion from "../components/Accordion";
import DataHeader from "../components/DataHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import NewTeamMemberPopup from "../components/NewTeamMemberPopup";
import Pagination from "../components/Pagination";
import StandardFooter from "../components/StandardFooter";
import TeamMemberDetails from "../components/TeamMemberDetails";
import UserSettings from "../components/UserSettings";
import { DataProvider, useData } from "../hooks/DataContext";
import TeamMemberType from "../types/TeamMemberType";

const TeamMembersPage = () => {
  return (
    <>
      <DataProvider<TeamMemberType> url="https://localhost:7138/api/TeamMember">
        <div className="container">
          <header className="header">
            <div className="top-bar"></div>
            <div className="wrapper">
              <a href="/" className="logo">
                <img src="/logo.png" alt="VegaITSourcing Timesheet" />
              </a>
              <UserSettings name="Aleksa Perovic"></UserSettings>
              <NavBar active="Team Members"></NavBar>
            </div>
          </header>
          <TeamMemberSection></TeamMemberSection>
          <StandardFooter></StandardFooter>
        </div>
      </DataProvider>
    </>
  );
};

const TeamMemberSection = () => {
  const { data, isLoading, error, paginationInfo } = useData<TeamMemberType>();

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico clients"></i>Clients
        </h2>
        <DataHeader
          useDataHook={useData<TeamMemberType>}
          createPopup={<NewTeamMemberPopup />}
        />
        <LetterFilter useDataHook={useData<TeamMemberType>} />
        <div className="accordion-wrap clients">
          {isLoading && <div>Loading clients</div>}
          {error && <div>{error}</div>}
          {data?.map((client) => (
            <Accordion
              key={client.id}
              object={client}
              DetailsComponent={TeamMemberDetails}
            />
          ))}
        </div>
        {paginationInfo !== undefined && (
          <Pagination
            paginationData={paginationInfo}
            useDataHook={useData<TeamMemberType>}
          />
        )}
      </section>
    </div>
  );
};

export default TeamMembersPage;
