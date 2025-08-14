function ProfileCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:py-4 gap-2 p-[30px] bg-[#fff9c6] rounded-xl m-5 min-w-[200px]">
      <img
        className="size-30 mx-auto block rounded-full sm:mx-0 sm:shrink-0"
        src="/visual.jpg"
        alt="보름달"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">심선범</p>
          <p className="font-medium text-gray-500">Product Engineer</p>
        </div>
        {/* animate-bounce */}
        <button
          className="transition border-purple-200 text-purple-600 outline-1 px-3 py-1 rounded-full 
        hover:text-white hover:bg-purple-800 cursor-pointer"
        >
          Message
        </button>
      </div>
    </div>
  );
}
export default ProfileCard;
