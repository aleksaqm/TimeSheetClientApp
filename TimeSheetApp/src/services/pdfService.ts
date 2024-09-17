import GetReportType from "../types/GetReportType"


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

        const response = await fetch(urlWithParams.toString());
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const blob = await response.blob();
        const urlBlob = window.URL.createObjectURL(blob);

        // Create a link element and trigger a download
        const link = document.createElement('a');
        link.href = urlBlob;
        link.download = 'report.' + extension;
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(urlBlob);
        return response;
      } 
    catch(error: any) {
        return null;
    } 
}

export default generateFile;
