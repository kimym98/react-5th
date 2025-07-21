import type { Note } from "../api/getNote";
import { ROUTES } from "../routes";
import BackLink from "./components/BackLink";
import NoteForm from "./components/NoteForm";

interface Props {
  newNoteId: number;
  onCreate: (newNoteItem: Note) => void;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

function NoteCreate({ newNoteId, onCreate, onChangeRoute }: Props) {
  const handleBackLink = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackLink} />
      <NoteForm
        mode="create"
        newNoteId={newNoteId}
        onCreate={onCreate}
        onBackLink={handleBackLink}
      />
    </div>
  );
}
export default NoteCreate;
