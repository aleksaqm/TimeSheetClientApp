import Accordion from "../components/Accordion";
import CategoryDetails from "../components/CategoryDetails";
import DataHeader from "../components/DataHeader";
import LetterFilter from "../components/LetterFilter";
import NavBar from "../components/NavBar";
import NewCategoryPopup from "../components/NewCategoryPopup";
import Pagination from "../components/Pagination";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import { DataProvider, useData } from "../hooks/DataContext";
import CategoryType from "../types/CategoryType";

const CategoriesPage = () => {
  return (
    <>
      <DataProvider<CategoryType> url="https://localhost:7138/api/Category">
        <div className="container">
          <header className="header">
            <div className="top-bar"></div>
            <div className="wrapper">
              <a href="/" className="logo">
                <img src="/logo.png" alt="VegaITSourcing Timesheet" />
              </a>
              <UserSettings></UserSettings>
              <NavBar active="Categories"></NavBar>
            </div>
          </header>
          <CategorySection></CategorySection>
          <StandardFooter></StandardFooter>
        </div>
      </DataProvider>
    </>
  );
};

const CategorySection = () => {
  const {
    data: categories,
    isLoading,
    error,
    paginationInfo,
  } = useData<CategoryType>();

  return (
    <div className="wrapper">
      <section className="content">
        <h2>
          <i className="ico clients"></i>Categories
        </h2>
        <DataHeader
          useDataHook={useData<CategoryType>}
          createPopup={<NewCategoryPopup />}
        />
        <LetterFilter useDataHook={useData<CategoryType>} />
        <div className="accordion-wrap clients">
          {isLoading && <div>Loading categories</div>}
          {error && <div>{error}</div>}
          {categories?.map((category) => (
            <Accordion
              key={category.id}
              object={category}
              DetailsComponent={CategoryDetails}
            />
          ))}
        </div>
        {paginationInfo !== undefined && (
          <Pagination
            paginationData={paginationInfo}
            useDataHook={useData<CategoryType>}
          />
        )}
      </section>
    </div>
  );
};

export default CategoriesPage;
