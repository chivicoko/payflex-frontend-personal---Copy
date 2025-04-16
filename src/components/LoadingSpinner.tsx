const LoadingSpinner = ({dimensions, dynamicSize, color}: {dimensions?:string, dynamicSize?: string, color?: string}) => {
  return (
    <span className={`${dimensions || "w-fit h-fit"}`}>
      <svg
        className={`animate-spin ${dynamicSize || 'size-4'} ${color || 'text-blue-700'} inline`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </span>
  )
}

export default LoadingSpinner;