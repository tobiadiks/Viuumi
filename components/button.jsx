import React from 'react';

const Button = ({
    playButton = false,
    children,
    onClick,
    size = 'small',
    color = 'secondary',
    rounded = true,
    disabled = false,
}) => {
    const baseClasses =
        'flex  whitespace-nowrap justify-center gap-3 lg:text-[20px]  text-[14px] items-center font-semibold focus:outline-none text-center';
    const sizeClasses = {
        small: 'px-[24px] lg:py-[20px] py-[10px]  lg:min-w-48 min-w-40 w-auto ',
        large: 'lg:min-w-[533px] lg:h-[74px] min-w-[280px] h-[50px]',
    };
    const colorClasses = {
        primary: 'bg-brand-blue text-white',
        secondary: 'bg-brand-gray text-brand-blue',
    };
    const roundedClass = rounded ? 'rounded-full' : 'rounded';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            className={` ${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${roundedClass} ${disabledClass} `}
            onClick={onClick}
            disabled={disabled}
        >
            {playButton && (
                <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9959 0.0518799C8.82026 0.0518799 6.69352 0.697019 4.88458 1.90571C3.07564 3.11441 1.66574 4.83238 0.83318 6.84236C0.000615756 8.85235 -0.217221 11.0641 0.207217 13.1979C0.631654 15.3317 1.6793 17.2917 3.21768 18.8301C4.75606 20.3684 6.71607 21.4161 8.84986 21.8405C10.9837 22.265 13.1954 22.0471 15.2054 21.2146C17.2154 20.382 18.9333 18.9721 20.142 17.1632C21.3507 15.3542 21.9959 13.2275 21.9959 11.0519C21.9926 8.1355 20.8326 5.33949 18.7704 3.27729C16.7083 1.21509 13.9122 0.0551253 10.9959 0.0518799ZM14.2193 11.6531L11.5035 13.5491L10.0786 14.5436C9.96867 14.6204 9.8398 14.6655 9.706 14.6741C9.57221 14.6827 9.43861 14.6545 9.31974 14.5925C9.20086 14.5305 9.10126 14.4371 9.03175 14.3225C8.96225 14.2078 8.92551 14.0763 8.92552 13.9422V8.16151C8.92551 8.02744 8.96225 7.89593 9.03175 7.78129C9.10126 7.66664 9.20086 7.57324 9.31974 7.51124C9.43861 7.44924 9.57221 7.42102 9.706 7.42964C9.8398 7.43826 9.96867 7.48339 10.0786 7.56014L11.5035 8.55468L14.2193 10.4505C14.3161 10.5181 14.3952 10.608 14.4498 10.7127C14.5044 10.8174 14.5329 10.9337 14.5329 11.0518C14.5329 11.1699 14.5044 11.2862 14.4498 11.3909C14.3952 11.4956 14.3161 11.5855 14.2193 11.6531Z"
                        fill="#0061FE"
                    />
                </svg>
            )}
            <span>{children}</span>
        </button>
    );
};

export default Button;
