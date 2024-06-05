export default function Card({ card }) {
    return (
        <div className="flex flex-wrap justify-center">
            {card.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
                    <div className="bg-slate-100 shadow-lg rounded-lg p-5">
                        <img src={card.image} alt={card.title} className="mb-5" />
                        <h2 className="text-2xl font-bold text-center">{card.title}</h2>
                        <p className="text-center">{card.description}</p>
                        <div className="flex justify-center mt-5">
                            <button className="border rounded-full px-5 border-slate-800">Read more</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}