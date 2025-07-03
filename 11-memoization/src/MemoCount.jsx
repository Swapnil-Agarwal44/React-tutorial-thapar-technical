
import { useRef, memo } from "react";

// eslint-disable-next-line react/display-name

// This component is wrapped around the Memo wrapper to ensure that this component is not re-rendered untill and unless the props have been changed.

export const Counts = memo(({ bioData }) => {
    //We are using the useRef to store the number of times this component is re-rendered. If we have used the state, then it would have caused the child component to re-render in addition to the rendering caused due to change in props. And we cannot also use the variables, because their values doesn't persist between re-renders. 
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
        {/* In this case, since the child component doesn't re-renders on changing the count state of the parent component, therefore the values of this renderCount doesn't change after the initial number. */}
      </p>
    </div>
  );
});

// export default memo(Counts);
