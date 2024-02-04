import { ContactContent } from "@/components/contact-page/contact-content";

export const Contact = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full p-5 bg-zinc-900">
      <div className="flex items-center justify-center w-full h-full text-black border-2 rounded-md bg-slate-200">
        <ContactContent />
      </div>
    </div>
  );
};
