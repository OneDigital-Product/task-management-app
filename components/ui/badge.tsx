import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border-2 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-background hover:text-secondary-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-background hover:text-destructive",
        outline: "border-foreground text-foreground hover:bg-foreground hover:text-background",
        high: "border-destructive bg-background text-destructive hover:bg-destructive hover:text-background",
        medium: "border-warning bg-background text-warning hover:bg-warning hover:text-background",
        low: "border-success bg-background text-success hover:bg-success hover:text-background",
        terminal: "border-terminal-green bg-background text-terminal-green hover:bg-terminal-green hover:text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }