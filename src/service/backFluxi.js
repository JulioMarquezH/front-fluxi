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

export const getProductsById = (id) => {
    return axiosInstanceFluxi.get(`products?id=${id}`);
};

export const getStore = (user_id) => {
    return axiosInstanceFluxi.get(`store?user_id=${user_id}`);
};

export const getOrders = (user_id) => {
    return axiosInstanceFluxi.get(`orders?user_id=${user_id}`);
};

export const postCreateProduct = (data) => {
    return axiosInstanceFluxi.post(`products/`, data);
};

export const postCreateStore = (data) => {
    return axiosInstanceFluxi.post(`store/`, data);
};

export const deleteStore = (id) => {
    return axiosInstanceFluxi.delete(`store?id=${id}`);
};

export const deleteOrders = (id) => {
    return axiosInstanceFluxi.delete(`orders?id=${id}`);
};

export const deleteProducts = (id) => {
    return axiosInstanceFluxi.delete(`products?id=${id}`);
};


