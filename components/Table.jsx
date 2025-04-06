export default function Table({ title, columns, rows, data }) {
  return (
    <div>
      <table className="w-full table-auto border-collapse">
        <caption className="text-xl font-bold mb-2">{title}</caption>

        <thead>
          <tr className="bg-blue-400 text-white">
            {columns.map((colTitle, index) => (
              <th key={index} className="px-4 py-2 text-center align-middle border">
                {colTitle}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="bg-gray-100 hover:bg-gray-300">
              {rows.map((key, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-center align-middle border-t ">
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
