"use client"

type ErrorProps = {
  error?: {
    message?: string;
  };
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  // console.log(error.error.message);
  return (
    <div id='productsContent' className="flex min-h-fit flex-col items-center justify-between gap-2 p-24">
        <h1 className="text-red-700 text-center">ERROR!</h1>
        <h2 className="text-center">{error?.message || "There has been a glitch in the process. Could not fetch products!"}</h2>
        <button onClick={() => window.location.reload()} className="block border bg-transparent hover:bg-primary border-primary rounded-md text-primary hover:text-white py-[11px] px-[27px] hover:cursor-pointer shadow-md">
          Try again
        </button>
    </div>
  )
}

export default Error;