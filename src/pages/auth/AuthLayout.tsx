import { ReactNode, useEffect } from 'react'

//images
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'

import { Card, Col, Container, Image, Row } from 'react-bootstrap'

interface AccountLayoutProps {
	pageImage?: string
	authTitle?: string
	helpText?: string
	bottomLinks?: ReactNode
	isCombineForm?: boolean
	children?: ReactNode
	hasForm?: boolean
	hasThirdPartyLogin?: boolean
	userImage?: string
	starterClass?: boolean
}

const AuthLayout = ({
	children,
	starterClass,
}: AccountLayoutProps) => {
	useEffect(() => {
		if (document.body) {
			document.body.classList.add('authentication-bg', 'position-relative')
		}

		return () => {
			if (document.body) {
				document.body.classList.remove('authentication-bg', 'position-relative')
			}
		}
	}, [])

	return (
		<div className="authentication-bg position-relative">
			<div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
				<Container>
					<Row className="justify-content-center">
						<Col xxl={4} lg={10}>
							<Card className="overflow-hidden">
								<Row className="g-0">
									<Col lg={12}>
										<div className="d-flex flex-column h-100">
											<div className="auth-brand p-4">
												<a href="index.html" className="logo-light">
													<Image src={logo} alt="logo" height="22" />
												</a>
												<a href="index.html" className="logo-dark">
													<Image src={logoDark} alt="dark logo" height="22" />
												</a>
											</div>
											<div
												className={`p-4 my-auto ${
													starterClass ? 'text-center' : ''
												}`}
											>
												{children}
											</div>
										</div>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default AuthLayout
