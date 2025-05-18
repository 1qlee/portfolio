type WorkLinkProps = {
  direction: "prev" | "next";
  slug: string;
}

const variants = {
  initial: {
    
  }
}

export default function WorkLink({
  slug,
  direction
}: WorkLinkProps) {

  return (
    <a
      href={`/work/${slug}`}
      className="block border rounded-full py-2 px-4 text-clamp-md"
    >
      {direction === "prev" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      )}
    </a>
  )
}