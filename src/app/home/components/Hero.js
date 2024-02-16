'use client';
import { TypeAnimation } from 'react-type-animation';

export default function Hero()
{
    return(
        <>
            <section className="hero-section">
                <div className="mx-auto">
                    <div className="hero min-h-screen">
                        <div className="hero-content w-full sm:flex block">
                            <div className="w-full">
                                <h1 className="text-5xl font-bold flex flex-wrap gap-2">Money Divider For

                                <TypeAnimation
                                    sequence={[
                                        'Trips', // Types 'One'
                                        1000, // Waits 1s
                                        'business', // Deletes 'One' and types 'Two'
                                        2000, // Waits 2s
                                        'Events', // Types 'Three' without deleting 'Two'
                                    ]}
                                    wrapper="span"
                                    speed={{type: 'keyStrokeDelayInMs', value: 150}}
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ color:'blue', display: 'inline-block' }}
                                    />
                                </h1>
                                    <p className="py-6">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>

                            <div className="text-center sm:8/12">
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-cartoon-money-illustrations_23-2150909257.jpg"
                                    alt="Money"
                                    width={450}
                                    height={350}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}