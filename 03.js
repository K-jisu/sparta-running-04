/**
 * [03.js]
 *
 * - todos 배열과 수정 대상 todo의 id, 그리고 변경할 title이 주어집니다.
 * - updateTodoTitle 함수를 작성하여,
 *   1) 해당 id를 가진 todo의 title을 찾아서 새로운 title로 업데이트하세요.
 *   2) 업데이트된 새로운 todos 배열을 반드시 반환해야 합니다.
 *   3) 해당 id가 존재하지 않으면 기존 배열을 그대로 반환하세요.
 *
 * @param {Array} todos
 * @param {number} id
 * @param {string} newTitle
 * @returns {Array} 새로운 todos 배열
 */

const todos = [
  { id: 1, title: "청소하기", completed: false },
  { id: 2, title: "운동하기", completed: false },
];

function updateTodoTitle(todos, id, newTitle) {
  // 1) 해당 id를 가진 todo의 title을 찾아서 새로운 title로 업데이트하세요.
  return todos.map((item)=>{

    // return item.id === id ? {...todos, title : newTitle} = newTitle : item
    // if(item.id === id){
    //   item.title = newTitle;
    // }
    // return item

  })
  // 2) 업데이트된 새로운 todos 배열을 반드시 반환해야 합니다.

  // 3) 해당 id가 존재하지 않으면 기존 배열을 그대로 반환하세요.
}


updateTodoTitle(todos, 1, "청소 완료")

// export 수정 불가
export { updateTodoTitle };
