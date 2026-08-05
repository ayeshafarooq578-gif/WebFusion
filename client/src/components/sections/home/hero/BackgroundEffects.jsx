const BackgroundEffects = () => {
    return (
        <>
        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute top-60 -left-20 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
        }}
        />
        </>
    )
};

export default BackgroundEffects;