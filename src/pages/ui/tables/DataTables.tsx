import { Card, Col, Row } from 'react-bootstrap'

//dummy data
import { employeeRecords } from './data'
import { Column } from 'react-table'
import { Employee } from './types'

// components
import { PageSize, Table } from '@/components'
import { PageBreadcrumb } from '@/components'

const columns: ReadonlyArray<Column> = [
	{
		Header: 'ID',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Name',
		accessor: 'name',
		defaultCanSort: true,
	},
	{
		Header: 'Phone Number',
		accessor: 'phone',
		defaultCanSort: false,
	},
	{
		Header: 'Age',
		accessor: 'age',
		defaultCanSort: true,
	},
	{
		Header: 'Company',
		accessor: 'company',
		defaultCanSort: false,
	},
]

const sizePerPageList: PageSize[] = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: employeeRecords.length,
	},
]

const DataTables = ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	return (
		<>
			<PageBreadcrumb title={title} subName="Tables" />
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<h4 className="header-title">{title}</h4>
							<p className="text-muted mb-0">
								{description}
							</p>
						</Card.Header>
						<Card.Body>
							<Table<Employee>
								columns={columns}
								data={employeeRecords}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default DataTables
