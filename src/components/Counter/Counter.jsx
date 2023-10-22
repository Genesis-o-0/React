import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";


export default function Counter() {
  const totalDonations = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="pt-5">
      <h1 className="text-center text-primary fw-bold pb-5">
        Amount of donations: {totalDonations}$
      </h1>
      <div className="d-flex justify-content-center gap-5">
        <button
          className="btn btn-success mx-5"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-danger mx-5"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
