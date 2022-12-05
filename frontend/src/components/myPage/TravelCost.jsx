import { useReducer } from "react";
import { useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "입금":
      return state + action.payload;
    case "리셋":
      return state - state;
    default:
      return state;
  }
};

const TravelCost = () => {
  // reducer - state를 업데이트하는 역할 : 은행
  // dispatch - state 업데이트 위한 요구
  // action - 요구내용

  const [number, setNumber] = useState(0);
  const [member, setMember] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>총 여행 경비</h2>
      <h3>당신의 예상 총 금액 : {money}</h3>
      <h3>여행인원수 : {member}</h3>
      <h3>1인당 금액 : {parseInt(money) / parseInt(member)}</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />

      <input
        type="member"
        value={member}
        onChange={(e) => setMember(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "입금", payload: number })}>
        입력
      </button>
      <button onClick={() => dispatch({ type: "리셋", payload: number })}>
        리셋
      </button>
    </div>
  );
};
export default TravelCost;
