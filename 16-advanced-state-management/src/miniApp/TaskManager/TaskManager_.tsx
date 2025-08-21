import tw from "@/utils/tw";
import PinnedTaskList_ from "./PinnedTaskList_";
import UnPinnedTaskList_ from "./UnPinnedTaskList_";

function TaskManager_({ className }: { className: string }) {
  return (
    <div
      lang="en"
      className={tw(
        "w-72 flex flex-col gap-2 p-5 border border-accent rounded text-accent",
        className
      )}
    >
      <PinnedTaskList_ />
      <UnPinnedTaskList_ />
    </div>
  );
}
export default TaskManager_;
