export default function FormButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full flex flex-col justify-center items-center self-stretch mt-6 px-0 py-3 rounded-[999px] left-8 top-6 bg-[#3578FF] text-white"
    >
      {children}
    </button>
  )
}
