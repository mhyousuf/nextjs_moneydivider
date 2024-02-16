export default function Contact()
{
    return(
        <>
            <section className="about-section">
                <div className="container mx-auto p-4">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-500">Contact Us </div>
                        <div className="flex justify-center">
                            <form className="w-full md:w-8/12">
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Enter Your Name"
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Subject</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            placeholder="Enter Your Subject"
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Description</span>
                                        </div>
                                        <textarea
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Enter Your Description"
                                            className="textarea textarea-bordered w-full">
                                        </textarea>
                                    </label>
                                </div>

                                <div className="form-control w-full pt-3">
                                    <button className="btn btn-primary">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
            </section>
        </>
    );
}