import { UUID } from "crypto";

interface ClientType{
    id: UUID,
    name: string,
    address: string,
    city: string,
    country: string,
    postalCode: string
}

export default ClientType;