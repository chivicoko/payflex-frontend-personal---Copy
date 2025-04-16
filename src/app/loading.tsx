import Image from "next/image";

const Loading = () => {
  return (
    <div className='loader flex h-full min-h-full items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50'>
      <div className="relative size-20 animate-spin">
        <Image
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

export default Loading;

