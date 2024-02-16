export default function HowItWorkCrud(props){
    return(
        <>
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white text-center flex justify-center items-center text-3xl">
                    <i className={props.icon}></i>
                </div>

                <div className="card-title">{props.title}</div>
                <div>{ props.description}</div>
            </div>
        </div>
        </>
    );
}