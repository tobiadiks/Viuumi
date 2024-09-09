import Image from 'next/image';

const TestimonialCard = ({image,heading, details,name, title}) => {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-center items-center gap-12  w-auto text-center md:text-left text-lighter-gray">
            <div className={'image-container'}>
                <Image className='rounded-xl flex-grow object-cover h-auto' alt='image' src={image}  width={500} height={500}/>
                </div>
                <div className="flex flex-col gap-8  flex-grow-0">
                    <h2 className="text-3xl font-bold text-brand-blue md:text-lighter-gray">
                        {heading}
                    </h2>
                    <p className='opacity-[51%]'>
                        {details}
                    </p>
                    <h3 className="text-xl font-bold">
                        {name}
                        <span className='opacity-[51%] '>
                            {title}
                        </span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;
