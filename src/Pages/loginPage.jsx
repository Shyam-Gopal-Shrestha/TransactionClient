import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../Components/loginForm";

const LoginPage = () => {
        return ( 
        <>
        <Container>
            <Row className="d-flex align-items-center justify-content-center vh-100">
                
                <Col>
                    <Stack className="shadow-lg border rounded p-4">
                        <h1>Welcome !!</h1>
                        <p>Manage your income and expenses</p>
                        <p>Track your finance</p>
                    </Stack>
                </Col>

                {/* Login up form */}
                <Col>
                    <Stack className="shadow-lg border rounded p-4">
                        <h1>Login !</h1>
                        {/* sign up form */}
                        <LoginForm />
                        <p>Don&apos;t have account?</p><Link to="/signup">Signup</Link>
                    </Stack>
                </Col>
            </Row>
        </Container>
        </>
        
     );
}
 
export default LoginPage;