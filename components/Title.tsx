import Link from "next/link";

const Title = () => {
    return (
        <div className="h-20 items-center justify-between flex mx-5 mt-1">
            <Link href={`/`}>
                <p className="text-white text-6xl font-bold font-serif">Diabetes Predictor</p>
            </Link>
            <div>
                <Link href={"/about"}>
                    <p className="text-white">About Us</p>
                </Link>
            </div>
        </div>
    );
}

export default Title;