"use client";

import { useFormState, useFormStatus } from "react-dom";
// useFormState...サーバーが返す値をクライアント側でstateとして扱うことができるフック
import { createTask } from "../actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId); //taskIdを含む関数の作成
  const initialState = { error: "" }; //初期状態
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300"
        disabled={pending}
      >
        送信
      </button>
    );
  };
  return (
    <div>
      <form action={formAction}>
        {/*formAction関数の実行 */}
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <button type="submit" className="bg-gray-400 ml-2 px-2">
          送信
        </button>
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
