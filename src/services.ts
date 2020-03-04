const axios = require("axios").default;

let getSection = async (name: string) => {
  let result = await axios.get(`/api/${name}`);
  return result.data;
};

export { getSection };
