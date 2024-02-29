import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/*eslint-disable react/prop-types */
function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    };

    const sortBy = searchParams.get("sortBy") || "";

    return <Select value={sortBy} options={options} type="white" onChange={handleChange} />;
}

export default SortBy;
