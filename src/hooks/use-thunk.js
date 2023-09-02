import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunkFunc) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunkFunc(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunkFunc]
  );

  return [runThunk, isLoading, error];
}
