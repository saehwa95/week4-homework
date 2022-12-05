// // 액션 (dispatch에 들어가는 친구들만 작성)
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// // 액션 크리에이터
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// export const toggleStatusTodo = (payload) => {
//   return {
//     type: TOGGLE_STATUS_TODO,
//     payload,
//   };
// };

// export const getTodoById = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };
// // 초기값
// const initialState = {
//   id: 1,
//   title,
//   content,
//   isDone: false,
// };

// // 리듀서
// const todo = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO: {
//       return {

//       };
//     }

//     case DELETE_TODO: {
//       return {

//       };
//     }

//     case TOGGLE_STATUS_TODO: {
//       return {

//       };
//     }

//     case GET_TODO_BY_ID: {
//       return {

//       };
//     }

//     default:
//       return state;
//   }
// }

// export default todo