import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      <Spinner color="success" />
    </div>
  );
}
