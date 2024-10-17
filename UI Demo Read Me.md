# OIDC demo UI
This react application is the UI for the OIDC demo Portal

## Build & run (for developers)

The application run on PORT=5000 by default.

- Env variables

  - IDP_UI_BASE_URL: MOSIP IDP UI URL (Example:https://idp.dev.mosip.net/)
  - IDP_API_URL: MOSIP IDP API URL (Example:https://api.dev.mosip.net/v1/idp)
  - OIDC_BASE_URL: This will be internally resolved to OIDC server by internal nginx  (Example:http://idp.dev.mosip.net/oidc-server)
  - REDIRECT_URI: Value that needs to be passed into authorize redirect_uri parameter (Example:https://health-services.com/userprofile)
  - CLIENT_ID: OIDC client Id, that is registered on IDP (Example:health-services)
  - ACRS: Value that needs to be passed into authorize acr_values parameter (Example:mosip:idp:acr:generated-code)
  - PRIVATE_KEY: Private key corresponding to the public key of registered OIDC Client (Example:http://idp.idp/v1/idp)


- Build and run Docker for a service:
  $ npm start
  ```
