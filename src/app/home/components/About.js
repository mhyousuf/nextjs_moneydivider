export default function About()
{
    return(
        <>
            <section className="about-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-500">About Us </div>
                        <div className="md:flex">
                            <div className="text-center md:w-4/12">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/10/31/11/58/money-1015277_640.jpg"
                                    alt="About"
                                    width="100%"
                                    height="auto"
                                />
                            </div>

                            <div className="md:w-8/12">
                                <div className="font-bold md-2">What is Lorem Ipsum?</div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>

                                <div className="font-bold md-2">What is Lorem Ipsum?</div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}