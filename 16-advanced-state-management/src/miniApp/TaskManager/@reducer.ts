export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPin: boolean;
};

export type State = Task[];

const ACTION_TYPES = {
  ADD_TASK: "태스크 추가",
  SET_TASK: "태스크 토글",
  TOGGLE_TASK: "핀 토글",
  DELETE_TASK: "태스크 삭제",
} as const;

type ActionType = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];

export const INITAL_TASK: State = [
  {
    id: "4db2c176-cb93-4965-9f59-b790fee1a639",
    content: "Context + Reducer",
    isCompleted: false,
    isPin: false,
  },
  {
    id: "d9c73854-27ec-49db-8f9a-e8cd70a64b3c",
    content: "Zustand",
    isCompleted: false,
    isPin: false,
  },
];

export default function reducer(state: State, action): State {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK: {
      //추가
      //태스크 생성
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin: false,
      };
      //태스크 병합
      const nextState = [newTask, ...state];
      return nextState; //배열 리턴
    }
    // 제거
    case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload;
      const nextState = state.filter((item) => item.id !== deleteId);
      return nextState;
    }

    // 핀토글
    case ACTION_TYPES.TOGGLE_TASK: {
      const taskId = action.payload;
      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isPin: !item.isPin };
          return nextTask;
        } else {
          return item;
        }
      });
      return nextState;
    }

    // 체크 토글
    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload;
      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isCompleted };
          return nextTask;
        } else {
          return item;
        }
      });
      return nextState;
    }
    default:
      break;
  }
}
