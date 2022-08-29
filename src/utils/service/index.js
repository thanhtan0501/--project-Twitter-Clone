import jwt_decode from "jwt-decode";

export const createOrGetUser = async (res) => {
    const decode = jwt_decode(res.credential);
    const { name, picture, email, sub } = decode;
    const user = {
        _id: sub,
        type: "user",
        name: name,
        email: email,
        image: picture,
    };
    return user;
};
