export default function SearchBar() {
    return (
        <div className="flex justify-center">
        <input className="border border-slate-500 px-10 rounded-full" type="text" />
        <button className="border rounded-full px-5 border-slate-800">Search</button>
        </div>
    );
    }