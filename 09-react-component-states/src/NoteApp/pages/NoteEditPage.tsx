import { getNoteItem, type Note } from "../api/getNote";
import { ROUTES } from "../routes";
import BackLink from "./components/BackLink";
import NoteForm from "./components/NoteForm";

interface Props {
  onDelete?: (willDeleteNoteId: number) => void;
  onEdit?: (willEditNote: Note) => void;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
  noteId: number | null;
}

function NoteEditPage({ noteId, onChangeRoute, onEdit, onDelete }: Props) {
  if (!noteId) return;
  const note = getNoteItem(noteId);
  const handleBackLink = () => onChangeRoute(ROUTES.list);
  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackLink} />
      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm
            mode="edit"
            onDelete={onDelete}
            onEdit={onEdit}
            note={note}
            onBackLink={handleBackLink}
          />
        </>
      )}
    </div>
  );
}
export default NoteEditPage;
