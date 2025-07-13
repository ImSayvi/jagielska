import React from "react";
import { BiChevronsDown } from "react-icons/bi";



const Contact = () => {
    return (
        <div className="">
            <div className="container bg-gray-100 py-14 border my-10 border-primary">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-primary/80 drop-shadow-sm">Tutaj będę!</h1>
                        <p>Uchwycę Twoje najlepsze chwile z zawodów! Wystarczy, że podasz mi klasę, w której startujesz, imię swojego wierzchowca oraz dane kontaktowe.
                            Ja zajmę się resztą – przygotuję dla Ciebie wyjątkową fotorelację, która będzie nie tylko pamiątką sukcesów, ale też świadectwem Twojej ciężkiej pracy i pasji.<br/><br/>
                        </p>
                    </div>
                    <div className="text-center grid place-items-center">
                        <button className="primary-btn">Zamów zdjęcia z zawodów!</button>
                        <button className="flex items-center mt-3 hover:text-primary duration-100">Zobacz cennik <BiChevronsDown className="animate-bounce"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;