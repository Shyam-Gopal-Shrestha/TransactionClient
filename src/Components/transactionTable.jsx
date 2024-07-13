import { Button, ButtonGroup, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const TransactionTable = () => {
  const { user } = useSelector;

  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Type</th>
          <th>Amount</th>
          <th>
            <ButtonGroup size="sm">
              <Button
                variant="outline-danger"
                onClick={() => handleOnDeleteAll()}
                disabled={!allTransactionIds?.length}
              >
                Delete All
              </Button>
              <Button
                variant="outline-warning"
                onClick={() => handleOnDeleteSelected()}
                disabled={!selectedTransactionIds.length}
              >
                Delete Selected
              </Button>
            </ButtonGroup>
          </th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.title}</td>
              <td>{transaction.type}</td>
              <td>
                {transaction.type === "expense" ? (
                  <span className="text-danger">${transaction.amount}</span>
                ) : (
                  <span className="text-success">${transaction.amount}</span>
                )}
              </td>
              <td>
                <Form name={transaction._id}>
                  <Form.Check
                    type="checkbox"
                    name={transaction._id}
                    onClick={() => toggleId(transaction._id)}
                  />
                </Form>
              </td>
            </tr>
          );
        })}

        <tr>
          <td colSpan={5} className="text-end mr-4">
            <strong>
              Total balance:
              {totalBalance < 0 ? (
                <span className="text-danger">-${totalBalance * -1}</span>
              ) : (
                <span className="text-success">${totalBalance}</span>
              )}
            </strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TransactionTable;
