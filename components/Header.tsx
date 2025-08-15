export function Header() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Top decorative lines */}
      <div className="mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-1 bg-primary mb-1"
            style={{ width: `${100 - i * 10}%` }}
          />
        ))}
      </div>

      {/* Main title */}
      <div className="text-center mb-8 scanline-effect">
        <h1 className="chunky-text text-8xl md:text-9xl lg:text-[12rem] leading-none text-primary mb-4 tracking-tighter glitch">
          TO-DO
        </h1>
        <div className="mono-text text-lg md:text-xl text-foreground mb-2 typing-effect">
          Engineering productivity.
        </div>
        <div className="mono-text text-lg md:text-xl text-foreground">
          An invitation-only experiment.
        </div>
      </div>

      {/* Command prompt style input */}
      <div className="max-w-md mx-auto mb-8">
        <div className="terminal-border bg-card p-4">
          <div className="mono-text text-sm text-muted-foreground mb-2">
            Enter command:
          </div>
          <div className="flex items-center">
            <span className="mono-text text-primary mr-2">$</span>
            <span className="mono-text cursor">list tasks</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative lines */}
      <div className="mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-1 bg-primary mb-1 ml-auto"
            style={{ width: `${70 + i * 10}%` }}
          />
        ))}
      </div>
    </div>
  );
}