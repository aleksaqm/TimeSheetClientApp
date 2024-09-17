import GetReportType from "../types/GetReportType"
import apiClient from "./apiClient";


const generateFile = async (url: string, params: GetReportType, extension: string) => {
  try {
    const urlWithParams = new URL(url);
    Object.keys(params).forEach((key) => {
      const value = params[key as keyof GetReportType];
      if (value != null) {
        urlWithParams.searchParams.append(key, value.toString());
      }
    });
    console.log(urlWithParams);

    const response = await apiClient.get(urlWithParams.toString(), {
      responseType: 'blob',
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch activities");
    }

    const blob = new Blob([response.data]);
    const urlBlob = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = urlBlob;
    link.download = 'report.' + extension;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(urlBlob);
    return response;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export default generateFile;
