import axios from "axios";
import cryptoService from "./cryptoService";

const { decodeJWT } = {
  ...cryptoService,
};

const baseUrl = window._env_.OIDC_BASE_URL;

const fetchUserInfoEndPoint = "/fetchUserInfo";

const post_fetchUserInfo = async (code, client_id, redirect_uri, grant_type) => {
  let request = {
    code: code,
    client_id: client_id,
    redirect_uri: redirect_uri,
    grant_type: grant_type
  };

  const endpoint = baseUrl + fetchUserInfoEndPoint; 
  const response = await axios.post(endpoint, request, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return decodeJWT(response.data);
};

const oidcService = { post_fetchUserInfo };

export default oidcService;
