import Filter from "@/components/Filter";
// import Projects from "../Dashboard/Projects"
import CompanyTable from "@/components/CompanyTable/CompanyTable";


const Customers = () => {
    return <>
    <Filter/>
    {/* <DataTables title='Cutsomers Data' description="" /> */}
    <CompanyTable/>
    </>
}

export default Customers;