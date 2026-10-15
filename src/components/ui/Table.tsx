import './Table.css'

interface Column<T> {
  header: string
  accessor: keyof T
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
  striped?: boolean
}

function Table<T extends Record<string, unknown>>({ columns, data, striped = false }: TableProps<T>) {
  return (
    <div className="table-wrapper">
      <table className={`table${striped ? ' table--striped' : ''}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="table__th">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table__empty">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="table__row">
                {columns.map((col) => (
                  <td key={String(col.accessor)} className="table__td">
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : String(row[col.accessor] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
