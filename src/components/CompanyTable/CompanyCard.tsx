function CompanyCard() {
    const imageLink =
		'https://images.unsplash.com/photo-1523800378286-dae1f0dae656?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	return (
		<div className="d-flex justify-content-around border rounded bg-white my-2">
			<div className="w-25 p-2">
				<center>
					<img src={imageLink} width={'80%'} alt="company" />
				</center>
			</div>
			<div className="fs-5 w-50 d-flex flex-column py-2 justify-content-between ">
				<div className="text-black">
					Blockchain Consultant And Architect Course
				</div>
				<div>
					<div>
						<i className="ri-user-3-fill px-1"></i> Hemendra Lalawat
					</div>
					<div>
						<i className="ri-calendar-fill px-1"></i> 12/12/2023 10:20 AM
					</div>
				</div>
			</div>
			<div className="fs-4 px-2 py-1 text-black w-25 d-flex justify-content-end align-items-start ">
				<i className="ri-more-line border rounded-circle px-1"></i>
			</div>
		</div>
	)
}

export default CompanyCard
