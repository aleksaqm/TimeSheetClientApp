import { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";
import ClientType from "../types/ClientType";
import ProjectType from "../types/ProjectType";
import TeamMemberType from "../types/TeamMemberType";
import getAll from "../services/getAllService";
import DropDownList from "./DropDownList";
import TextInput from "./TextInput";
import GetReportType from "../types/GetReportType";
import generateReport from "../services/getReportService";
import ReportResponse from "../types/ReportResponse";

interface Props {
  setData: React.Dispatch<React.SetStateAction<ReportResponse>>;
  setParams: React.Dispatch<React.SetStateAction<GetReportType | undefined>>;
}

const ReportsHeader = ({ setData, setParams }: Props) => {
  const [members, setMembers] = useState<TeamMemberType[]>([]);
  const [clients, setClients] = useState<ClientType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClient, setSelectedClient] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<string>("All");
  const [selectedMember, setSelectedMember] = useState<string>("All");
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [startDate, setStardDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const categoryOptions = [
    { key: 0, value: "All" },
    ...categories.map((category, index) => ({
      key: index + 1, // Adjust index to start from 1
      value: category.name,
    })),
  ];
  const projectOptions = [
    { key: 0, value: "All" },
    ...projects.map((project, index) => ({
      key: index + 1, // Adjust index to start from 1
      value: project.name,
    })),
  ];

  const clientOptions = [
    { key: 0, value: "All" },
    ...clients.map((client, index) => ({
      key: index + 1, // Adjust index to start from 1
      value: client.name,
    })),
  ];

  const memberOptions = [
    { key: 0, value: "All" }, // Prepend "All" option
    ...members.map((member, index) => ({
      key: index + 1, // Adjust index to start from 1
      value: member.name,
    })),
  ];

  const clientChanged = (value: string, index: number) => {
    console.log(index);
    setSelectedClient(value);
    setSelectedClientIndex(index);
  };
  const projectChanged = (value: string, index: number) => {
    setSelectedProject(value);
    setSelectedProjectIndex(index);
  };
  const categoryChanged = (value: string, index: number) => {
    setSelectedCategory(value);
    setSelectedCategoryIndex(index);
  };

  const memberChanged = (value: string, index: number) => {
    setSelectedMember(value);
    setSelectedMemberIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getAll<ClientType[]>("Client");
        setClients(clientsData);

        const categoriesData = await getAll<CategoryType[]>("Category");
        setCategories(categoriesData);

        const projectsData = await getAll<ProjectType[]>("Project");
        setProjects(projectsData);

        const teamMembersData = await getAll<TeamMemberType[]>("TeamMember");
        setMembers(teamMembersData);
        //promise.all
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const resetSearch = () => {
    setSelectedCategory("All");
    setSelectedMember("All");
    setSelectedClient("All");
    setSelectedProject("All");
    setSelectedCategoryIndex(0);
    setSelectedMemberIndex(0);
    setSelectedClientIndex(0);
    setSelectedProjectIndex(0);
    setStardDate("");
    setEndDate("");
  };

  const getReport = async () => {
    let categoryId;
    let projectId;
    let clientId;
    let teamMemberId;
    {
      selectedCategoryIndex === 0
        ? (categoryId = null)
        : (categoryId = categories[selectedCategoryIndex - 1].id);
    }
    {
      selectedProjectIndex === 0
        ? (projectId = null)
        : (projectId = projects[selectedProjectIndex - 1].id);
    }
    {
      selectedClientIndex === 0
        ? (clientId = null)
        : (clientId = clients[selectedClientIndex - 1].id);
    }
    {
      selectedMemberIndex === 0
        ? (teamMemberId = null)
        : (teamMemberId = members[selectedMemberIndex - 1].id);
    }

    const getReportObject: GetReportType = {
      teamMemberId: teamMemberId,
      clientId: clientId,
      projectId: projectId,
      categoryId: categoryId,
      startDate: startDate,
      endDate: endDate,
    };

    const data = await generateReport("Report", getReportObject);

    if (data !== null) {
      setData(data);
      setParams(getReportObject);
    }
  };

  return (
    <>
      <div className="grey-box-wrap reports">
        <ul className="form">
          <li>
            <DropDownList
              labelText="Team member:"
              options={memberOptions}
              selected={selectedMember}
              handleChange={memberChanged}
            ></DropDownList>
          </li>
          <li>
            <DropDownList
              labelText="Category:"
              options={categoryOptions}
              selected={selectedCategory}
              handleChange={categoryChanged}
            ></DropDownList>
          </li>
        </ul>
        <ul className="form">
          <li>
            <DropDownList
              labelText="Client:"
              options={clientOptions}
              selected={selectedClient}
              handleChange={clientChanged}
            ></DropDownList>
          </li>
          <li>
            <TextInput
              type="date"
              name=""
              value={startDate}
              className="in-text datepicker"
              labelText="Start date::"
              handleChange={(value) => {
                setStardDate(value);
                console.log(value);
              }}
            ></TextInput>
          </li>
        </ul>
        <ul className="form last">
          <li>
            <DropDownList
              labelText="Project"
              options={projectOptions}
              selected={selectedProject}
              handleChange={projectChanged}
            ></DropDownList>
          </li>
          <li>
            <TextInput
              type="date"
              name=""
              value={endDate}
              className="in-text datepicker"
              labelText="End date::"
              handleChange={(value) => setEndDate(value)}
            ></TextInput>
          </li>
          <li>
            <button onClick={resetSearch} className="btn orange right">
              Reset
            </button>
            <button onClick={getReport} className="btn green right">
              Search
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReportsHeader;
