import Image from 'next/image';

const TestimonialCard = ({ image, heading, details, name, title }) => {
    return (
        <>
            <div className="flex w-auto flex-col items-center justify-center gap-12  text-center text-lighter-gray md:flex-row md:text-left">
                <div className={'image-container'}>
                    <Image
                        className="h-auto flex-grow rounded-xl object-cover"
                        alt="image"
                        src={image}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex flex-grow-0 flex-col  gap-8">
                    <h2 className="text-3xl font-bold text-brand-blue md:text-lighter-gray">
                        {heading}
                    </h2>
                    <p className="opacity-[51%]">{details}</p>
                    <h3 className="text-xl font-bold">
                        {name}
                        <span className="opacity-[51%] ">{title}</span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;
