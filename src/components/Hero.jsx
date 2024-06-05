export default function Hero({ hero }) {
    return (
        <div className="my-10">
            <img src={`${hero.image}`} alt="" />
            <div className="text-center">
                <h1 className="text-6xl font-bold text-dark">{hero.title}</h1>
                <p className="text-xl text-dark">{hero.description}</p>
            </div>
        </div>
    );
}