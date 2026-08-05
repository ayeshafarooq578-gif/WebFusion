const Badge = ({
    children,
}) => {
    return (
        <span className="
        inline-flex
        items-center
        rounded-full
        border
        border-violet-500/30
        bg-violet-500/10
        px-4
        py-2
        text-sm
        tex-t-violet-300
        backdrop-blur-md"
        >
            {children}
        </span>
    )
}

export default Badge;