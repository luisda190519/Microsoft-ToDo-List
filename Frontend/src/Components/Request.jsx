const URL = "http://localhost:3000";
const error_reponse = "Something wrong happened";

export const getRequest = async (name) => {
    const response = await fetch(URL + name);
    const resData = await response.json();
    return resData;
};

export const postRequest = async (name, data) => {
    const response = await fetch(URL + name, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        withCredentials: true,
    });

    const resData = await response.json();
    return resData;
};

export const deleteRequest = async (name) => {
    const response = await fetch(URL + name, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
        withCredentials: true,
    });

    const resData = await response.json();
    return resData;
};

export const putRequest = async (name, data) => {
    const response = await fetch(URL + name, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        withCredentials: true,
    });

    const resData = await response.json();
    return resData;
};
