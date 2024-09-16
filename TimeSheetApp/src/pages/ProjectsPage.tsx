import Accordion from "../components/Accordion";
import DataHeader from "../components/DataHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import NewProjectPopup from "../components/NewProjectPopup";
import Pagination from "../components/Pagination";
import ProjectDetails from "../components/ProjectDetails";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import { DataProvider, useData } from "../hooks/DataContext";
import ProjectType from "../types/ProjectType";

const ProjectsPage = () => {
  return (
    <>
      <DataProvider<ProjectType> url="https://localhost:7138/api/Project">
        <div className="container">
          <header className="header">
            <div className="top-bar"></div>
            <div className="wrapper">
              <a href="/" className="logo">
                <img src="/logo.png" alt="VegaITSourcing Timesheet" />
              </a>
              <UserSettings name="Aleksa Perovic"></UserSettings>
              <NavBar active="Projects"></NavBar>
            </div>
          </header>
          <ProjectSection></ProjectSection>
          <StandardFooter></StandardFooter>
        </div>
      </DataProvider>
    </>
  );
};

const ProjectSection = () => {
  const { data, isLoading, error, paginationInfo } = useData<ProjectType>();

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico clients"></i>Projects
        </h2>
        <DataHeader
          useDataHook={useData<ProjectType>}
          createPopup={<NewProjectPopup />}
        />
        <LetterFilter useDataHook={useData<ProjectType>} />
        <div className="accordion-wrap clients">
          {isLoading && <div>Loading clients</div>}
          {error && <div>{error}</div>}
          {data?.map((client) => (
            <Accordion
              key={client.id}
              object={client}
              DetailsComponent={ProjectDetails}
            />
          ))}
        </div>
        {paginationInfo !== undefined && (
          <Pagination
            paginationData={paginationInfo}
            useDataHook={useData<ProjectType>}
          />
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;
