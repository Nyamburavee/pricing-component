import React from "react";
import { useState } from "react";

const Pricingcomponent = () => {

    const [pricingCycle, setPricingcycle] = useState( true);

    const plans =  
    [
        {
        name: 'Basic',
        priceMonthly:19.99,
        priceAnnually: 199.99,
        storage: '500GB',
        users: 2,
        dataSend: '3GB',
      },
      {
        name: 'Professional',
        priceMonthly: 24.99,
        priceAnnually: 249.99,
        storage: '1TB',
        users: 5,
        dataSend: '10GB',
      },
      {
        name: 'Master',
        priceMonthly: 39.99,
        priceAnnually: 399.99,
        storage: '2TB',
        users: 10,
        dataSend: '20GB',
      },
    ];

    const getPrice = (plan) => {
        return pricingCycle === true ? `$${plan.priceAnnually}` : `$${plan.priceMonthly}`;
    }

    const handleClick = () => {
        setPricingcycle(!pricingCycle)
    }

    return (
        <div className=" bg-top bg-no-repeat bg-right-top bg-veryLightGrayishBlue pb-28">
            <header className=" flex flex-col">
                <h3 className=" text-grayishBlue text-5xl font-bold mt-32">Our Pricing</h3>
                <div className=" flex flex-row gap-6 items-center justify-center mt-20">
                    <h5 className=" text-lightGrayishBlue text-2xl">Annually</h5>
                    <div className=" bg-color w-20 rounded-full p-2 hover:brightness-150 cursor-pointer">
                        <div onClick={handleClick} className={` bg-white w-8  h-8 rounded-full 
                            ${
                                pricingCycle ? 'transform translate-x-0' : 'transform translate-x-full'
                            }`}></div>
                    </div>
                    <h5 className="  text-lightGrayishBlue text-2xl">Monthly</h5>
                </div>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32 mx-10 md:mx-40 md:gap-0">
                {plans.map((plan) => (
                    <div key={plan.name} className={`border bg-white rounded-lg p-10 ${
                        plan.name === 'Professional' ? 'bg-color text-white  ' : ' '
                    }`}>
                        <h2 className=" text-4xl font-bold text-grayishBlue my-12">{plan.name}</h2>
                        <p className=" text-6xl font-bold text-darkGrayishBlue border-b
                           border-lightGrayishBlue pb-10">{getPrice(plan)}</p>
                        <p className=" text-grayishBlue text-2xl font-bold 
                         border-b border-lightGrayishBlue py-4">{plan.storage} Storage</p>
                        <p className=" text-grayishBlue text-2xl font-bold 
                         border-b border-lightGrayishBlue py-4">{plan.users} Users Allowed</p>
                        <p className=" text-grayishBlue text-2xl font-bold
                          border-b border-lightGrayishBlue py-4">Send up to {plan.dataSend}</p>
                        
                        <button className={ ` rounded-lg w-full text-xl p-4 mt-10 cursor-pointer 
                            ${plan.name === 'Professional' ? ' bg-white text-blue-500 hover:bg-color' : ' hover:bg-white bg-color text-white'}`}>LEARN MORE</button>
                    </div>
                ))}

            </main>
        </div>
    )
};

export default Pricingcomponent

