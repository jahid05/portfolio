/* eslint-disable react/prop-types */


const SectionTitle = ({title}) => {
    return (
        <div className="text-center relative">
            <h1 className="text-center py-14 md:text-8xl text-4xl opacity-20 text-slate-400 font-bold tracking-[8px] uppercase">{title}</h1>
            {/* <h2 className="absolute top-20  font-semibold text-theme-400 text-xl md:text-5xl border-b-4 border-theme-100">{subTitle}</h2> */}
        </div>
    );
};

export default SectionTitle;