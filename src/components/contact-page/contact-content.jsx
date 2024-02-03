export const ContactContent = () => {
  return (
    <div className="space-y-8">
      {/* heading */}
      <div className="space-y-4 text-center">
        <span className="text-6xl font-bold">Thanks for Connecting!</span>
        <hr className="border-black" />
        <span>Social Media</span>
      </div>

      {/* parent */}
      <div className="parent">
        <div className="border-2 border-red-600 div1">Name Input</div>
        <div className="text-left div2">
          <span className="font-bold text-7xl">Name</span>
        </div>
        <div className="border-2 border-red-800 div3">Email Input</div>
        <div className="text-left div4">
          <span className="font-bold text-7xl">Email</span>
        </div>
        <div className="border-2 border-red-900 div5">Message Input</div>
        <div className="text-right div7">
          <span className="font-bold text-7xl">Message</span>
        </div>
        <div className="border-2 border-blue-900 div6">
          <span></span>
        </div>
      </div>
    </div>
  );
};
