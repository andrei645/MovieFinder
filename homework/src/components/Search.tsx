interface SearchProps {
    onChange: (next: string) => void;
}

export default function Search({onChange}:SearchProps){

    const handleSearch = (input:string) => {
        onChange(input);
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <input type="text" 
                   placeholder="Search movie" 
                   className="border p-2 rounded w-300"
                   onChange={(e) => handleSearch(e.target.value)} />
        </div>
    );
}
