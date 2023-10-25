import jwt_decode from "jwt-decode";
import axios from "axios";

export const loginByUserName = async (appUser) => {
    try {
        const res = await axios.post("http://localhost:8080/api/login", appUser);
        return res;
    }catch (e){
        console.log(e)
    }

}

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);

}

export const checkRoleAppUser = (roleName) => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        const roleList = jwt_decode(jwtToken).roleList;
        const checkRole = roleList.some((role) => role.authority === roleName);
        return checkRole;
    }
}

export const infoAppUserByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        const result = jwt_decode(jwtToken);
        console.log(result)
        return result;
    }
};