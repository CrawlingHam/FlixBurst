export const Contacts = () => {
  return (
    <div id="contacts" className="m-auto max-w-[1040px] p-4 py-16 md:pl-20">
      <h1 className="text-center text-4xl font-bold text-[#001b5e]">
        Contacts
      </h1>
      <form
        action="https://getform.io/f/adae0d4d-a092-4ec9-af00-8f5564cd7763"
        method="POST"
        encType="multipart/form-data"
        className="py-6"
      >
        <div className="grid w-full gap-4 py-3 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="py-4 text-sm uppercase">Name</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-3"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-4 text-sm uppercase">Phone number</label>
            <input
              className="flex rounded-lg border-2 border-gray-300 p-3"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="py-4 text-sm uppercase">Email</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-3"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-4 text-sm uppercase">Subject</label>
          <input
            className="flex rounded-lg border-2 border-gray-300 p-3"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-4 text-sm uppercase">Message</label>
          <textarea
            className="flex rounded-lg border-2 border-gray-300 p-3"
            name="message"
          ></textarea>
        </div>
        <button className="button-center mt-4 w-full rounded-xl bg-[#001b5e] p-4 font-bold text-gray-100">
          <label className="">Send</label>
        </button>
      </form>
    </div>
  );
};
// use DB to store info
