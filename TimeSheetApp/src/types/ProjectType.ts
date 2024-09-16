import { UUID } from "crypto";

interface ProjectType{
    id: UUID,
    name: string,
    description: string,
    customer: string,
    lead: string,
    status: string
}

export default ProjectType;