import Layout from "@/components/Layout/Layout";
import BlogCard from "@/components/Ui/BlogCrud";
import Link from "next/link";
// import Link from "next/link";

async function getData(){
    let res = await fetch('https://dev.to/api/articles?per_page=28');

    return res.json();
}

export default async function Blog()
{

    let blogs = await getData();

    return(
        <>
            <Layout>
                <section className="blog-section">
                    <div className="container mx-auto p-4 mt-5">
                        <div className="text-center text-5xl font-bold mb-16 text-blue-500">Blog Lists </div>
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Blog</Link>
                                </li>
                            </ul>
                        </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {blogs.map((blog, index)=> (
                                    <BlogCard
                                    key={`blog=${index}`}
                                    social_image={blog.social_image}
                                    title={blog.title.slice(0, 20)}
                                    description={blog.description.slice(0, 60) + '....'}

                                    />
                                ))}
                            </div>

                            <div className="flex justify-center my-5 mt-8">
                                <div className="flex gap-3">
                                <a href="#" className="btn btn-primary px-10">Previous</a>
                                <a href="#" className="btn btn-primary px-10">Next</a>
                                </div>
                            </div>
                        </div>
                </section>
            </Layout>
        </>
    );
}