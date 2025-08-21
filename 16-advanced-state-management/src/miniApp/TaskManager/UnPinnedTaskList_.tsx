import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

function UnPinnedTaskList_() {
  const isCompleted = false;
  const isPin = false;

  const handleSetTask = () => {};

  const handleTogglePin = () => {};
  const handleDeleteTask = () => {};
  return (
    <ul className="flex flex-col gap-6">
      <li className="flex justify-between gap-1.5">
        <label className={tw("flex gap-1", isCompleted && "line-through")}>
          <input type="checkbox" />
          Zustand 배우기
        </label>
        <div className="flex gap-2">
          <button type="button">
            {isPin ? <PiPushPinFill /> : <PiPushPinLight />}
          </button>
          <button type="button">
            <RxCross1 />
          </button>
        </div>
      </li>
    </ul>
  );
}
export default UnPinnedTaskList_;
