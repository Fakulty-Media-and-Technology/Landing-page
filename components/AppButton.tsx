import { manrope_600 } from '@/configs/fonts';
import Image from 'next/image';
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

interface AppButtonProps extends ComponentProps<"button"> {
    title: string;
    disabled?: boolean;
    isLoading?: boolean;
    bgColor?: string;
    arrowLeft?: boolean;
}

const AppButton = ({
    className,
    title,
    disabled,
    isLoading,
    bgColor,
    arrowLeft,
    ...props
}: AppButtonProps) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={twMerge(
                `${disabled || isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : bgColor
                        ? bgColor
                        : "bg-red"
                } flex flex-row items-center justify-center rounded py-[12px] font-normal text-lg text-white  ${manrope_600.className}`,
                className
            )}
        >
            {/* {isLoading && (
          <Lottie
            animationData={LoadingSpinner}
            loop
            style={{ width: 35, height: 35, marginRight: 5 }}
          />
        )} */}
            {title}
            {arrowLeft && <Image src='/arrow-left.svg' width={15} height={11} alt='button' className='w-[15px] ml-2 mt-[2px] h-[11px] object-contain' />
            }
        </button>
    );
};

export default AppButton