import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

export default function NavDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className={`nav-dropdown ${open ? "nav-dropdown-open" : ""}`} ref={ref}>
      <button
        type="button"
        className="nav-dropdown-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDownIcon size={13} />
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
