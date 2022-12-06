// 액션 (dispatch에 들어가는 친구들만 작성)
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// 액션 크리에이터
// dispatch 하는 곳에서 사용하기 위해 export 해야함
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  // 4
  console.log("todo.id 가 제대로 들어오고 있니? : ", payload);
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// 초기값
const initialState = [
  {
    id: 1,
    title: "리액트",
    content: "리액트를 배워봅시다.",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }

    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case TOGGLE_STATUS_TODO: {
      // 5
      console.log("action이 제대로 리듀서까지 오고있는지 ? : ", action);

      // 6
      console.log("state 값을 확인해서 어떻게 활용할지 봐보자! : ", state);

      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    }

    case GET_TODO_BY_ID: {
      return [
        ...state,
        state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      ];
    }

    default:
      return state;
  }
};

export default todos;
