interface props {
  type?: string;
  placeholder: string;
}

const Input = ({ type = "text", placeholder }: props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex w-52 md:w-72 h-fit text-xs  px-3 py-2 rounded-md border border-stone-300 shadow-inner outline-none focus:border-blue-600;"
    />
  );
};

export default Input;
