import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupForm from "../Components/signupForm";

const SignupPage = () => {
    return ( 
        <>
        <Container>
            <Row className="d-flex align-items-center justify-content-center vh-100">
                
                <Col>
                    <Stack className="shadow-lg border rounded p-4">
                        <h1>Join our app!</h1>
                        <p>Manage your income and expenses</p>
                        <p>Track your finance</p>
                    </Stack>
                </Col>

                {/* Sign up form */}
                <Col>
                    <Stack className="shadow-lg border rounded p-4">
                        <h1>Signup !</h1>
                        {/* sign up form */}
                        <SignupForm />
                        <p>Already have account</p><Link to="/login">Login</Link>
                    </Stack>
                </Col>
            </Row>
        </Container>
        </>
        
     );
}
 
export default SignupPage;