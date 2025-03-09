export function CentredLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-[calc(100vh-2rem)] items-center justify-center">
            {children}
        </div>
    )
}