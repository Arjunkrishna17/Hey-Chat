interface props {
  name: string;
  width?: "fit" | "full";
  callback: () => void;
}
const PrimaryButton = ({ name, width = "fit", callback }: props) => {
  return (
    <button
      className={
        "flex px-5 py-1 border justify-center items-center rounded-lg bg-blue-600 text-white " +
        (width === "fit" ? "w-fit" : "w-full")
      }
    >
      <span>{name}</span>
    </button>
  );
};

export default PrimaryButton;
