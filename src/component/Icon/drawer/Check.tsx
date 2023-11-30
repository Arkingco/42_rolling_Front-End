export default function Check({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7 5V6.29412H16.4V7.58824H15.1V8.88235H13.8V10.1765H12.5V11.4706H11.2V12.7647H10.55V13.4118H9.25V12.7647H8.6V11.4706H7.3V10.8235H6V12.7647H7.3V14.0588H8.6V15.3529H9.25V16H10.55V15.3529H11.2V14.0588H12.5V12.7647H13.8V11.4706H15.1V10.1765H16.4V8.88235H17.7V7.58824H19V5H17.7Z"
        fill={color}
      />
    </svg>
  );
}