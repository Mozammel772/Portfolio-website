import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-w-screen-xl mx-auto px-3", className)}>
      {children}
    </div>
  );
};

export default Container;
