import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
    return (
        <TableOperations>
            <Filter
                filterField="discount"
                options={[
                    {
                        value: "all",
                        label: "All",
                    },
                    {
                        value: "no-discount",
                        label: "No discount",
                    },
                    {
                        value: "with-discount",
                        label: "With discount",
                    },
                ]}
            />
            <SortBy
                options={[
                    {
                        value: "name-asc",
                        label: "Sort by Name (A-Z)",
                    },
                    {
                        value: "name-desc",
                        label: "Sort by Name (Z-A)",
                    },
                    {
                        value: "regularPrice-asc",
                        label: "Sort by price (Low ➡️ High)",
                    },
                    {
                        value: "regularPrice-desc",
                        label: "Sort by price (High ➡️ Low)",
                    },
                    {
                        value: "maxCapacity-desc",
                        label: "Sort by capacity (Low ➡️ High)",
                    },
                    {
                        value: "maxCapacity-desc",
                        label: "Sort by capacity (High ➡️ Low)",
                    },
                ]}
            />
        </TableOperations>
    );
}

export default CabinTableOperations;
