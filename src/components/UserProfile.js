import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Error } from "../common/Errors";
import clientDetails from "../constants/clientDetails";
import { LoadingStates as states } from "../constants/states";
import LoadingIndicator from "../common/LoadingIndicator";

export default function UserProfile({ oidcService, i18nKeyPrefix = "userprofile",}) {
  
  const { post_fetchUserInfo } = {
    ...oidcService,
  };

  const [searchParams] = useSearchParams();
  const [error, setError] = useState({ errorCode: "", errorMsg: "" });
  
  const [userInfo, setUserInfo] = useState(null);
  const [status, setStatus] = useState(states.LOADING);

  const navigate = useNavigate();

  const navigateToLogin = (errorCode, errorDescription) => {
    let params = "?";
    if (errorDescription) {
      params = params + "error_description=" + errorDescription + "&";
    }

    //REQUIRED
    params = params + "error=" + errorCode;

    navigate("/" + params, { replace: true });
  };

  useEffect(() => {
    const getSearchParams = async () => {
      let authCode = searchParams.get("code");
      let errorCode = searchParams.get("error");
      let error_desc = searchParams.get("error_description");

      if (errorCode) {
        navigateToLogin(errorCode, error_desc);
        return;
      }

      if (authCode) {
        getUserDetails(authCode);
      } else {
        setError({
          errorCode: "authCode_missing",
        });
        setStatus(states.ERROR);
        return;
      }
    };
    getSearchParams();
  }, []);

  //Handle Login API Integration here
  const getUserDetails = async (authCode) => {
    setError(null);
    setUserInfo(null);

    try {
      let client_id = clientDetails.clientId;
      let redirect_uri = clientDetails.redirect_uri_userprofile;
      let grant_type = clientDetails.grant_type;

      var userInfo = await post_fetchUserInfo(authCode, client_id, redirect_uri, grant_type);

      // Puts user info into  
      setUserInfo(userInfo);
      setStatus(states.LOADED);
    
    } catch (errormsg) {
      setError({ errorCode: "", errorMsg: errormsg.message });
      setStatus(states.ERROR);
    }
  };


  // Creates Profile as Component and populates with User Data (INFO) 
  let el = (
    <div className="w-full pt-5">
      <div className="flex-grow bg-[#F2F4F4] mt-8 mb-6 shadow-lg rounded">
        <div className="py-10">
          {status === states.LOADING && (
            <LoadingIndicator size="medium" message={("loading_msg")} />
          )}
          {status === states.LOADED && (
            <>
              <div className="px-4">
                <div className="font-bold flex justify-center">
                  {userInfo?.given_name ?? userInfo?.name}
                </div>
                <div className="font-bold flex justify-center">
                  {("welcome_msg")}
                </div>
              </div>
              <div className=" px-3 py-6 flex justify-center">
                <img
                  alt={("profile_picture")}
                  className="h-20 w-20"
                  src={
                    userInfo?.picture
                      ? userInfo.picture
                      : "User-Profile-Icon.png"
                  }
                />
              </div>

              <div className="divide-slate-300 gap-2">
                <div className="px-4 py-3 grid grid-cols-2">
                  <div className="flex justify-start">{("email_address")}</div>
                  <div className="flex justify-end">
                    {userInfo?.email_verified ?? userInfo?.email}
                  </div>
                </div>
                <div className="px-4 py-3 bg-white grid grid-cols-2">
                  <div className="flex justify-start">{("gender")}</div>
                  <div className="flex justify-end">{userInfo?.gender}</div>
                </div>
                <div className="px-4 py-3 grid grid-cols-2">
                  <div className="flex justify-start">{("phone_number")}</div>
                  <div className="flex justify-end">
                    {userInfo?.phone_number_verified ??
                      userInfo?.phone ??
                      userInfo?.phone_number}
                  </div>
                </div>
                <div className="px-4 py-3 bg-white grid grid-cols-2">
                  <div className="flex justify-start">{("birth_date")}</div>
                  <div className="flex justify-end">{userInfo?.birthdate}</div>
                </div>
              </div>
            </>
          )}
          {status === states.ERROR && (
            <Error errorCode={error.errorCode} errorMsg={error.errorMsg} />
          )}
        </div>
      </div>
    </div>
  );

  return el;
}
