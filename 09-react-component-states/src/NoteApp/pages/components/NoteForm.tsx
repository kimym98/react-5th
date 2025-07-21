import type { Note } from "@/NoteApp/api/getNote";
import { useId, useState } from "react";
import "./NoteForm.css";
import { getUser, getUserList } from "@/NoteApp/api/getUser";
import {
  convertHTMLToText,
  convertTextToHTMLString,
} from "@/utils/convertHTMLToText";

interface Props {
  mode: "create" | "edit";
  newNoteId?: number;
  note?: Note;
  onCreate?: (newNoteItem: Note) => void;
  onBackLink: () => void;
  onDelete?: (willDeleteNoteId: number) => void;
  onEdit?: (willEditNote: Note) => void;
}

const userList = getUserList();

type Form = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
interface FormData {
  title: string;
  content: string;
  userId: number;
}

function NoteForm({
  mode,
  newNoteId,
  onCreate,
  onBackLink,
  note,
  onEdit,
  onDelete,
}: Props) {
  const [formData, setFormData] = useState<FormData>(() => {
    if (mode === "edit" && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      };
    }

    return {
      title: "",
      content: "",
      userId: 0,
    };
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e: Form) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(nextFormData);
  };
  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, content, userId } = formData;

    const newUserId = Number(userId);

    const user = getUser(newUserId);
    //note 객체 만들기 expand:user
    if (!user) return;
    if (!newNoteId) return;
    const newNote = {
      id: newNoteId,
      title: title.trim(),
      content: convertTextToHTMLString(content),
      userId: newUserId,
      createdAt: "",
      updatedAt: "",
      expand: {
        user: user,
      },
    };
    //oncreate() <- 전달
    onCreate?.(newNote);
    //list로 돌아가기
    onBackLink();
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (note && onEdit) {
      const willEditNote = {
        ...note,
        ...formData,
      };
      onEdit(willEditNote);
    }
    onBackLink();
  };
  const handleDelete = () => {
    if (!note) return;
    onDelete?.(note.id);
    onBackLink();
  };

  const isCreateMode = mode.includes("create");
  return (
    <form
      className="NoteForm"
      onSubmit={isCreateMode ? handleCreateNote : handleEdit}
    >
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          name="title"
          id={titleId}
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          name="content"
          id={contentId}
          onChange={handleUpdateFormData}
          value={formData.content}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          name="userId"
          id={userId}
          value={formData.userId}
          onChange={handleUpdateFormData}
        >
          <option>작성자 선택</option>
          {userList.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div className="buttonGroup">
        <button type="submit">{isCreateMode ? "추가" : "수정"}</button>
        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}
export default NoteForm;
