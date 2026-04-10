const WrapperWithHeader = ({ heading = "Something Something", children }) => {
  return (
    <div className="grid place-content-center">
      <h2 className="text-xl font-bold mt-10 mb-5">{heading}</h2>
      {children}
    </div>
  );
};
export default WrapperWithHeader;
