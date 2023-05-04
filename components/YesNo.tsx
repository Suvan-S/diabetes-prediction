const YesNo = (props) => {

    return (
        <ul className="grid w-56 gap-6 md:grid-cols-2">
            <li>
                <input type="radio" id={props.forYes} name={props.name} value={props.forYes} className="hidden peer" required onChange={(e) => props.setData(e.target.value)}/>
                <label htmlFor={props.forYes} className="bg-gray-800 justify-center border border-gray-700 cursor-pointer hover:bg-gray-700 hover:text-gray-600 inline-flex items-center peer-checked:border-green-600 peer-checked:text-green-600 px-5 py-1 rounded-lg text-gray-500 w-full">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">{props.YES}</div>
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id={props.forNo} name={props.name} value={props.forNo} className="hidden peer" onChange={(e) => props.setData(e.target.value)}/>
                <label htmlFor={props.forNo} className="bg-gray-800 justify-center border border-gray-700 cursor-pointer hover:bg-gray-700 hover:text-gray-600 inline-flex items-center peer-checked:border-pink-600 peer-checked:text-pink-600 px-5 py-1 rounded-lg text-gray-500 w-full">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">{props.NO}</div>
                    </div>
                </label>
            </li>
        </ul>
    );
}

export default YesNo;