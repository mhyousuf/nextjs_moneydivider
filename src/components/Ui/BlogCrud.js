export default function BlogCard(props){
    return(
        <>
            <div className="card shadow-xl">
                <div className="card-body p-0 overflow-hidden">
                    <div className="">
                        <img src={props.social_image} width="100%" height={250}/>
                    </div>

                    <div className="p-3">
                        <div className="card-title md-2">{props.title}</div>
                        <div>{ props.description}</div>
                    </div>

                    <div className="my-3 m-3">
                        <a href="#" className="text-blue-500">Read More...</a>
                    </div>
                </div>
            </div>
        </>
    );
}