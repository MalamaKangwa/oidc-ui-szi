import RedirectButton from "../common/RedirectButton";

export default function Login({ clientService }) {
  const { getURIforSignIn } = {
    ...clientService,
  };

  const uri_idp_UI = getURIforSignIn();

  

  return (
    <>
      <div className="w-full px-20">
        <h1 className="w-full text-center title-font sm:text-3xl text-3xl mt-8 mb-8 font-medium text-gray-900">
          Sign In as User
        </h1>

        <div className="w-full flex mb-6 text-slate-500">
          <span className="w-11 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
            <img src="images/username_icon.png" alt="User Icon" />
          </span>
          <input
            type="text"
            id="user"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5  "
            placeholder={("Username")}
          />
        </div>

        <div className="w-full flex mb-6 text-slate-500">
          <span className="w-11 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
            <img src="images/password_icon.png" alt="Password Icon"/>
          </span>
          <input
            type="password"
            id="password"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
            placeholder={("Password")}
          />
        </div>
        <button
          type="button"
          className="w-full justify-center text-white bg-[#198A00] hover:bg-[#2F8EA3]/90 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center mr-2 mb-2"
        >Submit
        </button>
        <div className="flex w-full mb-6 mt-6 items-center px-10">
          <div className="flex-1 h-px bg-black" />
          <div>
            <p className="w-16 text-center">{("or")}</p>
          </div>
          <div className="flex-1 h-px bg-black" />
        </div>
        <RedirectButton
          uri_idp_UI={uri_idp_UI}
          text="Sign in with ZPass"
          logoPath="mosip_logo.png"
        />
        <div className="flex flex-justify mt-5 w-full items-center text-center">
          <p className="w-full text-center">
            Dont Have an Existing Account? &nbsp;
            <a href="/signup" className="text-[#2F8EA3]"> Sign Up Here </a>
          </p>
        </div>
      </div>
    </>
  );
}