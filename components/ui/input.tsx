import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-2 border-primary bg-input px-4 py-3 text-base font-mono transition-colors file:border-0 file:bg-transparent file:text-base file:font-mono placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50 hover:border-accent",
          className
        )}
        ref={ref}
        spellCheck={false}
        autoComplete="off"
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }