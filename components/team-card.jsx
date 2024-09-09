import Image from 'next/image';

const TeamCard = ({image, name, description}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex items-end justify-center">
                <svg
                    width="247"
                    height="185"
                    viewBox="0 0 247 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.17749 24.2301C0.17749 7.58544 17.0106 -3.77913 32.4485 2.44283L232.113 82.9137C241.002 86.4959 246.823 95.118 246.823 104.701V161.207C246.823 174.18 236.306 184.697 223.332 184.697H23.6676C10.6944 184.697 0.17749 174.18 0.17749 161.207V24.2301Z"
                        fill="#18181D"
                    />
                </svg>
                <Image
                    alt="picture"
                    src={image}
                    width={214.16}
                    height={228.7}
                />
            </div>
            <h2 className="text-[1.125rem] font-bold text-lighter-gray">
                {name}
            </h2>
            <p className="text-[0.875rem] font-semibold text-lighter-gray opacity-[51%]">
                {description}
            </p>
        </div>
    );
};

export default TeamCard;
