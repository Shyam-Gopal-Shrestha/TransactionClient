import { Container } from "react-bootstrap";
import TopNavbar from "../Components/topNavbar";
import { useSelector } from "react-redux";
import TransactionForm from "../Components/transactionForm";

const TransactionPage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Container>
      <TopNavbar userName={user.name} />

      {/* Transaction Form */}
      <TransactionForm />

      {/* Transaction table */}
    </Container>
  );
};

export default TransactionPage;
