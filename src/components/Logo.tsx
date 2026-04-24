export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://cdn.poehali.dev/projects/9ad3e75b-af7d-4543-b68e-9fe49eb993da/bucket/57f9d598-9b70-4ea1-8f07-cb86854eaeb4.png"
        alt="Логотип"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}