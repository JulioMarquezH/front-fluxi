import { axiosInstanceFluxi } from "./instance";


export const postLogin = (data) => {
    return axiosInstanceFluxi.post(`users/login`, data);
};

export const getUsers = (name = '') => {
    return axiosInstanceFluxi.get(`users`);
};


export const getProducts = (user_id) => {
    return axiosInstanceFluxi.get(`products?user_id=${user_id}`);
};

export const getStore = (user_id) => {
    return axiosInstanceFluxi.get(`store?user_id=${user_id}`);
};
