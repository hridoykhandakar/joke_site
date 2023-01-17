import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const Contact = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(values);
    // console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Name:</label>
          <input
            className="border border-gray-800 mb-1"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label htmlFor="email">Email: </label>
          <input
            className="border border-gray-800"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className=" flex justify-evenly mt-3">
          <label htmlFor="group">Group</label>

          <select
            name="group"
            id="group"
            onChange={handleChange}
            value={group}
            className="border border-gray-800  p-2"
          >
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
          </select>
        </div>
        <br />
        <input
          type="submit"
          className="bg-teal-500 text-white cursor-pointer p-2 rounded-md mb-4"
          value={"Create new Contact"}
        />
      </form>
    </div>
  );
};
export default Contact;
