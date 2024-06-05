export default function Footer({ footer }) {
    return (
        <div className="bg-gray-800 text-white py-10 mt-10">
            <div className="text-center">
                <h2 className="text-2xl font-bold">{footer.title}</h2>
                <p>{footer.description}</p>
                <div className="flex justify-center mt-5">
                    {footer.links.map((link, index) => (
                        <a key={index} href={link.url} className="mx-2">{link.label}</a>
                    ))}
                </div>
                <p className="mt-10">{footer.copyright}</p>
            </div>
        </div>
    );
}