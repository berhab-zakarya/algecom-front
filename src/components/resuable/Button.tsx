"use client"
import React, { MouseEventHandler } from 'react'

interface ButtonType {
  title: string;
  className?: string;
  onTap?: MouseEventHandler<HTMLButtonElement>;
  state?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ 
  title, 
  className = '', 
  onTap, 
  state = true, 
  type = "button" 
}: ButtonType) => {
  return (
    <button
      disabled={!state}
      onClick={onTap}
      type={type}
      className={`bg-primary cursor-pointer w-[173px] h-[58px] rounded-[32px] text-white text-[20px] leading-7 hover:bg-blue-700 transition-all duration-300 ${className}`}
    >
      {title}
    </button>
  )
}

export default Button