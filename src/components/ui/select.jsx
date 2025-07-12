import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ value, onValueChange, children, ...props }) => {
  return React.cloneElement(children, { value, onValueChange, ...props });
};

const SelectTrigger = React.forwardRef(({ className, children, onValueChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={ref}
        type="button"
        className={`flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <span className={selectedValue ? "text-gray-900" : "text-gray-500"}>
          {selectedLabel || props.placeholder || "Select option"}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === SelectContent) {
              return React.cloneElement(child, { onSelect: handleSelect });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder }) => {
  return <span className="text-gray-500">{placeholder}</span>;
};
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef(({ children, onSelect, ...props }, ref) => {
  return (
    <div ref={ref} className="py-1" {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectItem) {
          return React.cloneElement(child, { onSelect });
        }
        return child;
      })}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ value, children, onSelect, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`}
      onClick={() => onSelect && onSelect(value, children)}
      {...props}
    >
      {children}
    </button>
  );
});
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }; 