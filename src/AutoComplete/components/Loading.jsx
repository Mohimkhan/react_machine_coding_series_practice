const Loading = () => {
  return (
    <div className="flex items-center">
      <p>Loading</p>
      <p>
        <span className="animate-ping">.</span>
        <span className="animate-ping delay-100">.</span>
        <span className="animate-ping delay-150">.</span>
      </p>
    </div>
  );
};
export default Loading;
