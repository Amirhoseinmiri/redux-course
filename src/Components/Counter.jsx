import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../app/features/counter/counterSlice";

const Counter = () => {
  //Read the data from the "Store"
  const count = useSelector((state) => state.counter.value);
  // Changing the data by sending "actions" to the Store
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

export default Counter;
