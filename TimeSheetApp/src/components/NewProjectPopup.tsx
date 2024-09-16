import { useState } from "react";
import { useData } from "../hooks/DataContext";
import ClientType from "../types/ClientType";
import ProjectType from "../types/ProjectType";

const NewProjectPopup = () => {
  const { fetchData } = useData<ProjectType>();
  const [clients, setClients] = useState<ClientType[]>([]);
  //   const [members, setMembers] = useState<TeamMemberType>

  return <>NewProjectPopup</>;
};

export default NewProjectPopup;
