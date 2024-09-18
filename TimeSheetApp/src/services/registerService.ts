import apiClient from "./apiClient";

const registerRequest = async (url: string, name:string, username: string, email: string, password: string, role: number) => {
    try {
      const response = await apiClient.post(url, {
        name,
        username,
        email,
        password,
        role
      });

      return response.data;
    } catch (error) {
      console.error("Error during register:", error);
      throw error;
    }
  };

export default registerRequest;