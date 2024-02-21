'use client'

import BackendMenu from "./BackendMenu";

export default function LayoutAuth({ children }) {
    return (
        <>

            <div className="w-full md:w-3/12">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="card-title text-2xl font-bold">
                            Dashboard
                        </div>
                        <BackendMenu />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-9/12">
                <div className="card shadow">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}