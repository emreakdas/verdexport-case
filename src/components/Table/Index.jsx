import Thead from "./Thead";
import Tbody from "./Tbody";
import Row from "./Row";
import Cell from "./Cell";

function Table({ children, thead }) {
  return (
    <table className="min-w-full divide-y divide-gray-700">
      <Thead theads={thead} />
      <Tbody>{children}</Tbody>
    </table>
  );
}

Table.Row = Row;
Table.Cell = Cell;

export default Table;