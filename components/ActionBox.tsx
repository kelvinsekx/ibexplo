import Link from "next/link";

export function ActionBox({
  title,
  buttonText,
  href,
}: {
  title: string;
  buttonText: string;
  href: string;
}) {
  return (
    <Link href={href} className="font-semibold h-full text-2xl">
      <div>
        <div className="px-4 min-h-[8rem] text-center">{title}</div>
        <div className="bg-em-red text-white rounded-large text-center flex justify-center items-center gap-2 p-2.5">
          {buttonText}
          {buttonText.toLocaleLowerCase() == "find" && (
            <div className="w-6 h-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
