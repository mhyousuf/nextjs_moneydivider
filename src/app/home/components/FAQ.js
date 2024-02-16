export default function FAQ()
{

    let faqs = [
        {
            question:"Focus me to see content",
            answer:"tabIndex={0} attribute is necessary to make the div focusable",
        },
        {
            question:"Focus me to see content",
            answer:"tabIndex={0} attribute is necessary to make the div focusable",
        },
        {
            question:"Focus me to see content",
            answer:"tabIndex={0} attribute is necessary to make the div focusable",
        },
        {
            question:"Focus me to see content",
            answer:"tabIndex={0} attribute is necessary to make the div focusable",
        },
    ];
    return(
        <>
            <section className="about-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-500">Frequently Asked Question </div>

                        <div className="">
                            <div className="">
                            {faqs.map((faq, index)=> (
                                <div key={`faq=${index}`} className="mb-3">
                                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">

                                        <div className="collapse-title text-xl font-medium">
                                            {faq.question}
                                        </div>

                                        <div className="collapse-content">
                                            <p>{faq.answer}</p>
                                        </div>

                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}