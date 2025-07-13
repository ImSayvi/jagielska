 import React from "react";
 import BannerImg from "../../assets/about.jpg";

 const Services = () => {
    return (
        <div className="py-16 bg-slate-100">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    {/* image section */}
                        <div>
                            <img src={BannerImg} alt="konik hehe" className="sm:scale-125 max-h-[300px] drop-shadow-md mx-auto"/>
                        </div>
                    {/* text section */}
                    <div className="space-y-4">
                            {/* heading section */}
                        <div className="flex items-center gap-4">
                            <div className="text-primary text-7xl">
                                <h1 className="font-bold">01</h1>
                            </div>
                            <div>
                                <p className="text-primary">Zdjęcia</p>
                                <h1 className="text-2xl sm:text-4xl font-bold">Estetyczne</h1>
                            </div>
                        </div>
                        {/* bottom section */}
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ea, officia beatae. Quaerat nobis quis maxime a consectetur 
                                asperiores optio repellendus? <br/><br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit.
                            </p>
                        </div>
                        <button className="outline-btn">Zobacz inne zdjęcia</button>
                    </div>
                </div>
            </div>
        </div>
    );
 };

 export default Services;