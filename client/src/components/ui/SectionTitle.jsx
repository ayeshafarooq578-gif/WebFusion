const SectionTitle = ({
    badge,
    title,
    subtitle,
    center = true,
}) => {
    return (
        <div className={`${
            center ? "text-center" : ""
        }
        max-w-3xl mx-auto mb-16`}>
            {badge && (
                <span className="inline-block text-violet-400 font-medium mb-3">
                    {badge}
                </span>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {title}
            </h2>
            
                <p className=" text-gray-400 mt-6 leading-8">
                    {subtitle}
                </p>
            
        </div>
    );
};

export default SectionTitle;