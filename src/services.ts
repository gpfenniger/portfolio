const axios = require("axios").default;

let getSection = async (name: string): Promise<string> => {
  let result = await axios.get(`/api/${name}`);
  return result.data;
};

let getProjects = async () => {
  let result = await axios.get(`/api/projects`);
  return result.data;
};

export { getProjects, getSection };
