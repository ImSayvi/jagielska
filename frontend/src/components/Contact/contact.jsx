import React from "react";

const Contact = () => {
    return (
        <div className="">
            <div className="container bg-gray-100 py-14 border my-10 border-primary">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-black/80">Tutaj będę</h1>
                    </div>
                    <div className="text-center grid place-items-center">
                        <button className="primary-btn">Zamów zdjęcia z zawodów!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;