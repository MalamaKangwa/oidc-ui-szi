const RedirectButton = ({ uri_idp_UI, text, logoPath }) => {
  return (
    <a
      href={uri_idp_UI}
      className="w-full font-medium text-blue-600 hover:text-blue-500"
    >
      <button
        type="button"
        className="relative w-full text-white bg-orange-500 shadow-lg hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center mr-2 mb-2"
      >
        {text}
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          <img className="flex mr-1 ml-1 w-6 h-6" alt="Logo Path" src={logoPath} />
        </div>
      </button>
    </a>
  );
};

export default RedirectButton;
