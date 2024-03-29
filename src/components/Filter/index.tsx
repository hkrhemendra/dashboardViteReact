import { Dropdown } from "react-bootstrap"

const Filter = () => {
	return (
		<div className="w-100 d-flex justify-content-end my-3">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Filter
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

export default Filter
