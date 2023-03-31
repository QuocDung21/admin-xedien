import axiosClient from "./axiosClient";

class ProductApi {
  getAll = (params) => {
    const url = "/categorycontainer";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;
