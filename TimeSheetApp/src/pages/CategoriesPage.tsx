import NavBar from "../components/NavBar";
import StandardFooter from "../components/StandardFooter";
import UserSettings from "../components/UserSettings";
import { DataProvider } from "../hooks/DataContext";
import CategoryType from "../types/CategoryType";

const CategoriesPage = () => {
  return (
    <>
      <DataProvider<CategoryType> url="https://localhost:7138/api/Client">
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
          {/* <CategorySection></CategorySection> */}
          <StandardFooter></StandardFooter>
        </div>
      </DataProvider>
    </>
  );
};

// const CategorySection = () => {
//   const { data, isLoading, error, paginationInfo } = useData<CategoryType>();

//   return (
//     <div className="wrapper">
//       <section className="content">
//         <h2>
//           <i className="ico clients"></i>Clients
//         </h2>
//         <ClientHeader />
//         <LetterFilter />
//         <div className="accordion-wrap clients">
//           {isLoading && <div>Loading clients</div>}
//           {error && <div>{error}</div>}
//           {data?.map((client) => (
//             <Accordion key={client.id} object={client} />
//           ))}
//         </div>
//         {paginationInfo !== undefined && (
//           <Pagination paginationData={paginationInfo} />
//         )}
//       </section>
//     </div>
//   );
// };

export default CategoriesPage;
