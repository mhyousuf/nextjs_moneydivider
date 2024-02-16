import HowItWorkCrud from "@/components/Ui/HowItWorkCrud";

export default function HowItWork()
{

    let howitworks = [
        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },

        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },

        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },
        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },

        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },

        {
            icon:"ph ph-hand-coins",
            title:"Add expenses on the go",
            description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
        },
    ];
    return(
        <>
            <section className="work-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-500">HowItWork </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {howitworks.map((work, index)=> (
                                <HowItWorkCrud
                                key={`work=${index}`}
                                icon={work.icon}
                                title={work.title}
                                description={work.description}

                                />
                            ))}
                        </div>
                    </div>
            </section>
        </>
    );
}