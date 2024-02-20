// import Table from 'react-bootstrap/Table'
import PageBreadcrumb from '../PageBreadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import CompanyCard from './CompanyCard'

function CompanyTable() {
	let active = 2
	let items = []
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		)
	}

	const customerListNumber = [1, 2, 3, 4, 5];

	return (
		<>
			<PageBreadcrumb title={'Customers'} subName="Tables" />
			<div className="container">
				<div className="wrapper">
					{
						customerListNumber.map((ele) => <CompanyCard/>)
					}
				</div>
			</div>
			<div className="d-flex justify-content-center ">
				<Pagination>{items}</Pagination>
			</div>
		</>
	)
}

export default CompanyTable
