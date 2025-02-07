import { usePokeVisitContext } from "../../state/PokeVisitContext";
import styles from "./VisitCounter.module.scss";

function VisitCounter() {
  const { state, dispatch } = usePokeVisitContext();
  return (
    <div className={styles.root}>
      <span>{`PokeVisits #${state.length}`}</span>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
    </div>
  );
}

export { VisitCounter };
