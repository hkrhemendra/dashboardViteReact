import Filter from "@/components/Filter";
// import Projects from "../Dashboard/Projects"
import DataTables from "../ui/tables/DataTables";
import CompanyTable from "@/components/CompanyTable/CompanyTable";


const Customers = () => {
    return <>
    <Filter/>
    {/* <DataTables title='Cutsomers Data' description="" /> */}
    <CompanyTable/>
    </>
}

export default Customers;