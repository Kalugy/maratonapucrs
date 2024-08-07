

export default function Stages({
    tag,
    title,
    description,
    timeline,
    month
}){
  return (
    <article className="rounded-xl bg-white p-4 mb-5 ring ring-indigo-50 sm:p-6 lg:p-8">
    <div className="flex items-start sm:gap-8">
      <div
        className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
        aria-hidden="true"
      >
        
      </div>

      <div>
        <strong
          className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
        >
          {tag}
        </strong>

        <h3 className="mt-4 text-lg font-medium sm:text-xl">
          <a href="#" className="hover:underline">  {title} </a>
        </h3>

        <p className="mt-1 text-sm text-gray-700">
            {description}
        </p>

        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>

            <p className="text-xs font-medium"> {timeline}</p>
          </div>

          <span className="hidden sm:block" aria-hidden="true">&middot;</span>

          <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
            Planing Month <a href="/" className="underline hover:text-gray-700">{month}</a>
          </p>
        </div>
      </div>
    </div>
  </article>
  );
}