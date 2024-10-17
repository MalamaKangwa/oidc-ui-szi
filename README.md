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

  ```
  $ docker build -t <dockerImageName>:<tag> . 
  $ docker run -it -d -p 5000:5000 -e IDP_UI_BASE_URL='http://localhost:3000' -e IDP_API_URL=http://localhost:8088/v1/idp -e OIDC_BASE_URL=http://localhost:8888 -e  REDIRECT_URI=http://localhost:5000/userprofile -e CLIENT_ID=healthservices -e ACRS="mosip:idp:acr:static-code" -e PRIVATE_KEY='-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoUPbvrrOxtxAt\nR2rCmSrSjZjyvpLklB8wxCqWQJ5wuvw1j7SEvMFds9QeYpomO/GVZNYGbWuBwQEG\nWdBll9ZdI02H5hjNzZi3SFcv+N+OHFh5RHNnkeLtIuA684BJHkJNL19LcQlb+u1G\nWeqyPCk3rdDNPZYBJBcS4i1BF3SF2gW9nsvxS+xOB12l1Dubntfs1AXhSgZvy5oe\nhgJIDhy7BbqJEJPfbcOAQE8GlnjxjSY3Ja0m9YD2MT3V93DSz0OLyLQjnMs+FJQc\nRpFDupHSSa3QerEXwxqHmXyH0RZJmH1oZizdEImdgXRjgfy98a6ZwU2p43WSg1LR\nrIZU+HC7AgMBAAECggEAAnaE1ocI7B3Qp8j2v/g7zy7xQQQW5C9isXT9Zot1hhLG\nZAZBTvvwHG3oObWZqduQsm3yT8/EFfb8C9q+mO363gwJM2bjkAdlJ7FwTSxoIQ07\nIjMlOSvCVVQAUfyEMQ23TKfXziPOTkFCvZfNPmRw+faaKpavHj8n80fJ/7zXIKpE\n/Z7+izLhGmos7LgofZRqxYMcq6RznR7w9FQPsdnspC3EPudrwV+HBAEuqOMfN+Zs\n2bVqKbOz0z8WzQ7K1+bhX93flBqlO3lVNXHK+Oov3DmTG4SIxaim30vM5oijaD+q\nsXYq1r34GRtcEZ26qx3iCdFd5o9sBgA6EMQ8iOWfMQKBgQDUT87IQWNPBBzWoANf\nKR4iR4wc9f4O1uZFnJ5Ec8EBscUvccYErQ3YHxcmycpbLWRijgNnCYsDXVU7uFsm\no7pV1Qn95o8TDHbr+F/mmKq/UMuMjvUmZc93pKMADlsw7aXRHlzuggIH2nAkRUi3\nrCYdmrXWwTyJ8f0cFIlS/EQAaQKBgQDK845NT/ZqOUqJdAq7aoTjC41ER6CFMSxR\nO215g8kaeYbnRlzNcyqxk9PTEEadoHvZyAdYxRfdLU22zE0ImN2Y5Jfi0wRJYT+C\nj3q1sORezw65qB/CKwgMnE9Tiu9fHbrlpeb+lIBEnIFiAoPwOOOMzhXzUxOtlT7r\n/v4Dy3MDgwKBgQCtat7Rba+LTCWuHZeDdBd8Eorc4QV644fFlm8kJJSjKKyS21DO\nYvgq7wI/GZZjMUmMwsj+sanNvr+u/x/dCOFb2J7HuDpnacf9aKwUs+DMUldg4ShX\nC9QRuvW1RwSvi33kuPNZkfHMrlzpE3qZJFEh30vmNYKYfoOrGw8sLIfy+QKBgHGU\nTo478vbNq0YzmBH88fOyslOFFnOT6m5nqMO5miFj47io6yTbkAgjaAeV8z8h4k4m\nIN5wJwPT58smmPH3wwRe4hXB7IM4lnd13sGyBox8qowCaAudU3rjO43QklgT5lXB\nO/47k3FSeSIlsDsPS2GwsB4l3zxk6vreEMCE6pALAoGAZ6vITL4uljwBE3Wv+czJ\nEYiOzmnRLK3TwcNx2E1i4gLi8Fj2NUtXAU2BXEa9oW8Zh+b95X0GjgLJamjZi1cH\nU9ByKn/LBzASbvK5q2fLEsOWWigAUKfO6ecmc8MVniS4GJ+WGsUHcsC3usO4clm0\nWxOiTQVUZ7xZxXwy6DOFLFg=\n-----END PRIVATE KEY-----' <dockerImageName>:<tag>
  ```

- Build and run on local system: 
  Update "/oidc-ui/public/env-config.js" file according to the requirements   
  ```
  $ npm start
  ```
