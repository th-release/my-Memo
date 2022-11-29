import fetch from "unfetch";
const fetcher = async (path: string, options: any) => {
  const response = await fetch(path, options);
  return response.json();
};

export default fetcher;