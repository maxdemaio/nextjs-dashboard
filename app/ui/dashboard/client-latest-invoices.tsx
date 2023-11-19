"use client";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function LatestInvoicesClient({
  children,
  invoiceId
}: {
  children: React.ReactNode;
  invoiceId: number;
}) {
  return (
    <div className="flex flex-col">
      <button className="bg-gray-50 py-2 px-4" onClick={() => alert(invoiceId)}>
        deez nuts
      </button>
      {children}
    </div>
  );
}
