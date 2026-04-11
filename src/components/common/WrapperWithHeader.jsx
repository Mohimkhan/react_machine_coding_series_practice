const WrapperWithHeader = ({ heading = "Something Something", children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-bold mt-10 mb-5 text-center">{heading}</h2>

      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
};
export default WrapperWithHeader;
