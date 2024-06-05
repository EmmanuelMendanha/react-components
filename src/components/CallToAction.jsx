export default function CallToAction({ cta }) {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white py-20 mt-5">
            <div className="text-center">
                <h2 className="text-3xl font-bold">{cta.title}</h2>
                <p>{cta.description}</p>
                <div className="flex justify-center mt-5">
                    <button className="bg-white hover:bg-blue-600 text-blue-500 hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mt-5">
                        {cta.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}