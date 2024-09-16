
const getAll = <T>(url: string): Promise<T> => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch data");
            }
            return response.json() as Promise<T>;
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}   

export default getAll;