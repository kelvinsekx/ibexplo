"use client";
const handleGetDir = (address) => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address,
  )}`;
  window.open(googleMapsUrl);
};
export const FindHospital = ({ address }: { address: string }) => (
  <div onClick={() => handleGetDir(address)}>
    <p className="text-sm text-em-black pt-4">Find on Maps</p>
    <svg
      width="30"
      height="43"
      viewBox="0 0 30 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_28_11)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.9539 17.0559L25.4868 12.7966L28.2628 8.27235C26.537 5.20202 23.6508 2.84528 20.1828 1.76638L14.9861 5.37574L11.9058 11.4793C12.8912 10.3639 14.3204 9.66213 15.9109 9.66213C18.8839 9.66213 21.294 12.1134 21.294 15.1373C21.294 15.8122 21.1737 16.4588 20.9539 17.0559ZM11.7868 11.6188L11.7709 11.6375L11.7712 11.6377L11.7868 11.6188Z"
          fill="#4285F4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.81723 30.4392L18.6053 19.8779C19.6771 19.2463 20.5148 18.2497 20.9542 17.0554L28.2626 8.27209C29.3695 10.2413 30 12.5033 30 14.9096C30 17.8971 29.0292 20.6624 27.3797 22.9206H27.3799C27.3799 22.9206 19.965 33.4306 18.802 35.8303C17.639 38.23 17.4065 40.3254 16.9078 41.1026C16.4092 41.8797 15.2797 41.5083 15.0139 40.3929C14.7482 39.2774 13.8176 36.9794 11.7574 33.4643C11.256 32.6088 10.5692 31.5506 9.81723 30.4392Z"
          fill="#34A853"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.60248 21.623L11.7709 11.6375L11.7712 11.6377C10.995 12.5866 10.5278 13.8065 10.5278 15.1373C10.5278 18.161 12.9379 20.6124 15.9109 20.6124C16.8928 20.6124 17.8131 20.3449 18.6056 19.8779L9.81724 30.4392C7.47972 26.9839 4.51074 23.0138 4.51074 23.0138H4.51174C4.18129 22.5693 3.87765 22.1049 3.60248 21.623Z"
          fill="#FBBC04"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.92721 6.27426L11.8418 11.5527L3.60248 21.623C2.46863 19.6364 1.82184 17.7595 1.82184 14.9096C1.82184 12.0598 2.99234 8.63563 4.92721 6.27426Z"
          fill="#EA4335"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.1828 1.76638L11.8418 11.5527L4.92722 6.27426C7.50937 3.13191 11.4698 1.12029 15.9109 1.12029C17.4002 1.12029 18.8354 1.34714 20.1828 1.76638Z"
          fill="#1A73E8"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_11">
          <rect width="30" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);
