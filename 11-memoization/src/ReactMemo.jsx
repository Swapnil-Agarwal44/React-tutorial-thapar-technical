import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";

//IMPORTANT NOTE:
// In this example, we will understand the use of the useMemo and React.Memo hook. 

// useMemo hook is used to optimize the values. In this example, we have used the useMemo hook to optimize the value of the myBioData object. It means that whenever we are passing this object data to any props, it's reference won't change in any re-render. This is because even if the data values are not changed, the reference gets changed after every re-renders, thus the childer to which the data is passed feels like that the props are changed, because the reference is changed. 

// React.Memo hook is used to wrap a component so as to avoid it's rendering unnecessarily to optimize it. We want to make sure that the component will re-render only when it's props have been changed, and other than that we don't want to re-render it. 

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  //  {};

  // We are using useMemo to memoize the myBioData object.   
  const myBioData = useMemo(() => {
    return {
      name: "thapa",
      age: 30,
    };
  }, []);

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center  items-center ">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      {/* In the below Counts component, we have passed the myBioData as props. And since myBioData has been memoized, it won't causes the componenet to be re-rendered because we also have used the React.Memo() wrapper around the component definition. So we can understand it like this way. First we have to memoize the data that has to be passed to the component, so it's reference doesn't change. And in the definition of the Counts component, we have used the React.Memo wrapper around it, which makes sure that the componenet is not re-rendered until and unless it's props have been changed. And since the props have been memoized, their references don't change even if the parent component is re-rendered, because of the count state. And so the child component doesn't feel that the props are changed, and the child componenet is not re-rendered.  */}
      <Counts bioData={myBioData} />
    </>
  );
};