"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  // Allows you to access the parameters of the current URL
  // /dashboard/invoices?page=1&query=pending -> {page: '1', query: 'pending'}
  const searchParams = useSearchParams();

  // Lets you read the current URL's pathname
  // /dashboard/invoices
  const pathname = usePathname();

  // Enables navigation between routes within client components programmatically
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
