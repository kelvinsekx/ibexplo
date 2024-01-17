export function Card() {
  return (
    <div className="bg-em-red text-white inline-flex flex-col px-[22px] pb-8 pt-[17px] rounded-xl align-center w-full gap-2.5 font-semibold">
      <div className="flex justify-between items-center">
        <div className="text-xl">Urgent Cause</div>
        <div className="font-bold text-[10px] bg-white/[.4] rounded-large flex justify-center align-center p-3">
          8:16AM GMT +1
        </div>
      </div>
      <div className="flex justify-between text-4xl items-baseline">
        <div>Bodija Bomb Blast</div>
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
      </div>
    </div>
  );
}
