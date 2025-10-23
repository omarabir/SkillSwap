const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="relative w-20 h-20">
        <div className="absolute border-4 border-solid border-[#FF1E1E] border-t-transparent rounded-full w-20 h-20 animate-spin"></div>
        <div className="absolute border-4 border-solid border-[#FF6560] border-t-transparent rounded-full w-16 h-16 top-2 left-2 animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
