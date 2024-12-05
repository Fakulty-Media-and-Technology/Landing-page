"use client"
import Image from "next/image";
import ScrollImage from './scroll'
import React, { useState, useEffect } from 'react'
import Header from "@/component/Header";
import Among from "@/screen/advantage";
import Advantage from "@/screen/Among";
import Launch from "@/screen/launch";
import { Dollar } from "@/config/data";
import Discover from "@/screen/Discover";




export default function Home() {

  return (
    <>
    <div className="total-container max-sm:oveflow-x-hidden max-sm:w-[360px]">
      
      <Header />
      

    {/* first section*/} 
      <div className= "cont text-white w-[1068px] h-[320px] mx-auto mt-8 text-center max-sm:px-5">
        <div className="africa">
          <h2 className="font-extrabold text-[58px] h-[134px] ">Reeplay, Your Gateway to Africa’s Best Entertainment</h2>
          <p className="text-[16px] font-medium h-[58px]  my-12 px-40 leading-[29px] max-sm:mr-2 ">{Dollar}</p>
          <button className="bg-red py-5 px-[48px] rounded-[100px] max-sm:mt-4">Get Started
              <Image
                src={'/arrow.png'}
                width={24}
                height={24}
                alt="logo"
                className="inline ml-3"
              />
          </button>
          </div>
      </div>


      {/* brand part */}
        <Among />

    {/* advantage part */}
        <Advantage />

    {/* Lauch part */}
        <Launch />

    {/* discover part */}
    <Discover />


        </div>
    </>
  );
}
