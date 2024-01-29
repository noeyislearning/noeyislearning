/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import MenuButton from "@/components/common/Buttons/MenuButton";
/** Interfaces */
import { PageHeaderProps } from "@/libs/interfaces/header";

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="mx-auto flex w-full flex-row items-center justify-between gap-2">
        <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-4 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex flex-row items-center gap-2">
            <div className="flex md:hidden lg:hidden">
              <MenuButton />
            </div>
            <h1 className="text-sm uppercase">{title}</h1>
          </div>
          <p className="hidden text-xs uppercase text-zinc-500 md:flex lg:flex">{description}</p>
        </div>
        <a
          href={"mailto:noeyislearning@gmail.com"}
          className="group flex flex-row items-center gap-2 text-sm uppercase transition-all duration-300 ease-in-out"
        >
          Hire me
          <EnvelopeIcon className="block h-4 w-4 transition-all duration-500 ease-in-out group-hover:hidden" />
          <EnvelopeOpenIcon className="hidden h-4 w-4 transition-all duration-500 ease-in-out group-hover:block" />
        </a>
      </div>
    </div>
  );
}
