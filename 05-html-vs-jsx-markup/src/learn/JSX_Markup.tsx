// import { imageType, statusMessage } from "@/data/learn";
import * as learnData from "@/data/learn";
import DataBingding from "./DataBinding";
import ConditionalRendering from "./ConditionalRendering";
import ConditionalDisplay from "./ConditionalDisplay";
import RenderList from "./RenderList";

function JSX_Markup() {
  const {
    statusMessage,
    imageType,
    isShowReactImage,
    reactLibrary,
    statusMessageWithId,
  } = learnData;
  return (
    <dl className="descriptionList">
      <DataBingding statusMessage={statusMessage} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage} />
      <RenderList reactLibrary={reactLibrary} items={statusMessageWithId} />
    </dl>
  );
}

export default JSX_Markup;
//dl dt dd
