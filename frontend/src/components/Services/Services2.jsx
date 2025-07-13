 import React from "react";
 import BannerImg2 from "../../assets/about2.jpg";

 const Services2 = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
 
                    {/* text section */}
                    <div className="space-y-4">
                            {/* heading section */}
                        <div className="flex items-center gap-4">
                            <div className="text-primary text-7xl">
                                <h1 className="font-bold">02</h1>
                            </div>
                            <div>
                                <p className="text-primary">Sesje</p>
                                <h1 className="text-2xl sm:text-4xl font-bold">Buduarowe</h1>
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
                        {/* image section */}
                    <div>
                        <img src={BannerImg2} alt="typiarka hehe" className="sm:scale-125 max-h-[400px] drop-shadow-md mx-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
 };

 export default Services2;