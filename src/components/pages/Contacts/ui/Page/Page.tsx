export const Contacts = () => {
    return (
      <div id="contacts" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
          <h1 className="text-4xl font-bold text-center text-[#001b5e]">Contacts</h1>
          <form action="https://getform.io/f/adae0d4d-a092-4ec9-af00-8f5564cd7763" method="POST" encType="multipart/form-data" className="py-6">
              <div className="grid md:grid-cols-2 gap-4 w-full py-3">
                  <div className="flex flex-col">
                      <label className="uppercase text-sm py-4">Name</label>
                      <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name"/>
                  </div>
                  <div className="flex flex-col">
                      <label className="uppercase text-sm py-4">Phone number</label>
                      <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone"/>
                  </div>
              </div>
              <div className="flex flex-col">
                  <label className="uppercase text-sm py-4">Email</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email"/>
              </div>
              <div className="flex flex-col">
                  <label className="uppercase text-sm py-4">Subject</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject"/>
              </div>
              <div className="flex flex-col">
                  <label className="uppercase text-sm py-4">Message</label>
                  <textarea className="border-2 rounded-lg p-3 flex border-gray-300" name="message"></textarea>
              </div>
              <button className="button-center w-full mt-4 p-4 rounded-xl bg-[#001b5e] text-gray-100 font-bold">
                  <label className="">Send</label>
              </button>
          </form>
      </div>
    )
  }
  // use DB to store info