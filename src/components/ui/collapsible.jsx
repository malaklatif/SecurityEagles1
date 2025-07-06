import React, { useState, createContext, useContext } from "react";

const CollapsibleContext = createContext();

export function Collapsible({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div>{children}</div>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({ children, className = "", ...props }) {
  const { open, setOpen } = useContext(CollapsibleContext);
  return (
    <button
      type="button"
      className={className}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      {...props}
    >
      {children}
    </button>
  );
}

export function CollapsibleContent({ children, className = "", ...props }) {
  const { open } = useContext(CollapsibleContext);
  if (!open) return null;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
} 