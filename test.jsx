const renderFormField = (field) => {
  const { name, type, label, options } = field;
  console.log("====================================");
  console.log(options);
  console.log("====================================");
  switch (type) {
    case "text":
    case "email":
    case "password":
    case "textarea":
      return (
        <div class="flex flex-col w-full mb-6" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            class="shadow appearance-none border border-red-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={type}
            name={name}
            id={name}
          />
        </div>
      );
    case "select":
      return (
        <div class="flex flex-col w-full mb-6" key={name}>
          <label htmlFor={name}>{label}</label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name={name}
            id={name}
          >
            {options?.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <div className="form-group" key={name}>
          <label>{label}</label>
          {options?.map((option) => (
            <div className="form-check" key={option.value}>
              <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={`${name}-${option.value}`}
                value={option.value}
              />
              <label
                className="form-check-label"
                htmlFor={`${name}-${option.value}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      );
    case "radio":
      return (
        <div className="form-group" key={name}>
          <label>{label}</label>
          {options?.map((option) => (
            <div className="form-check" key={option.value}>
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={`${name}-${option.value}`}
                value={option.value}
              />
              <label
                className="form-check-label"
                htmlFor={`${name}-${option.value}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      );
    case "file":
      return (
        <div class="flex flex-col w-full mb-6 bg-yellow-600 " key={name}>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={name}
          >
            Password
          </label>
          <input
            ype={type}
            name={name}
            id={name}
            class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
      );
    default:
      return null;
  }
};

// const fetchForms = async () => {
//   setLoading(true);
//   let formData = await axios.get("/api/forms");

//   let sc = await formData?.data?.schema;
//   let uisch = await formData?.data?.uischema;

//   setSchema(sc);
//   setUISchema(uisch);
//   setLoading(false);
// };
// fetchForms();
