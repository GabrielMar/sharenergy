export default function Album() {
  return (
    <div className="h-8 w-8">
      <svg viewBox="0 0 24 24" className="animate-spin">
        <path
          d="M12,23C5.9,23,1,18.1,1,12S5.9,1,12,1s11,4.9,11,11S18.1,23,12,23z M12,5c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7
		c3.9,0,7-3.1,7-7C19,8.1,15.9,5,12,5z"
          className="fill-gray-900 opacity-20"
        />
        <path
          d="M5,12H1C1,5.9,5.9,1,12,1v4C8.1,5,5,8.1,5,12z"
          className="fill-gray-900"
        />
      </svg>
    </div>
  );
}
