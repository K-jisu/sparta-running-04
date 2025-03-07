/**
 * [01.js]
 *
 * 1) 주어진 todos 배열에서 아직 완료되지 않은 todos만 추려내야 합니다.
 * 2) 이때, todos 배열은 id, title, completed 속성을 가진 객체들의 목록입니다.
 * 3) completed가 false인 항목들만 반환해야 하며, 그 결과는 새로운 배열이어야 합니다.
 *
 * @param {Array} todos
 * @returns {Array}
 */

const todos = [
  { id: 1, title: "잠자기", completed: false },
  { id: 2, title: "밥먹기", completed: true },
  { id: 3, title: "코딩하기", completed: false },
];

function getIncompleteTodos(todos) {
  return todos.filter((item)=>{
    return item.completed === false;
  })
}
getIncompleteTodos(todos)
// export 수정 불가
export { getIncompleteTodos };
