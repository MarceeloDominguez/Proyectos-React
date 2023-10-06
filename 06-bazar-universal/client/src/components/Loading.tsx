export default function Loading() {
  return (
    <div className="flex justify-center mt-10">
      <div
        className="inline-block text-[#53B175] h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
    </div>
  );
}
