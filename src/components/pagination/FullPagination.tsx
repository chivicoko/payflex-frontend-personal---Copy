import BasicPagination from './Pagination'

interface FullPaginationProps {
    // transactionPerPage: number,
    // handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    // totalTransactions: number,
    totalPages: number,
    paginate: (page: number) => void,
    currentPage: number,
}

const FullPagination = ({totalPages, paginate, currentPage}: FullPaginationProps) => {  
// const FullPagination = ({transactionPerPage, handleRowsPerPageChange, totalTransactions, totalPages, paginate, currentPage}: FullPaginationProps) => {  
    // console.log(transactionPerPage, handleRowsPerPageChange, totalTransactions);

  return (
    // <div className='pagination w-full flex flex-col md:flex-row items-center justify-center'>
    <div className='pagination w-full flex flex-col items-center justify-center'>
        {/* <div className='pages flex items-center justify-between gap-3'>
            <span>Showing</span>

            <div className="select-container">
                <select
                    value={transactionPerPage}
                    onChange={handleRowsPerPageChange}
                    className="span"
                >
                    <option value={totalTransactions > 5 && totalTransactions <= 10 ? transactionPerPage : 5}>
                        {totalTransactions > 5 && totalTransactions <= 10 ? transactionPerPage : 5}
                    </option>
                    <option value={totalTransactions > 10 && totalTransactions <= 15 ? totalTransactions: 10}>
                        {totalTransactions > 10 && totalTransactions <= 15 ? totalTransactions: 10}
                    </option>
                    <option value={totalTransactions > 15 && totalTransactions <= 20 ? totalTransactions : 15}>
                        {totalTransactions > 15 && totalTransactions <= 20 ? totalTransactions : 15}
                    </option>
                    <option value={totalTransactions > 20 && totalTransactions <= 25 ? totalTransactions : 20}>
                        {totalTransactions > 20 && totalTransactions <= 25 ? totalTransactions : 20}
                    </option>
                    <option value={totalTransactions > 25 && totalTransactions <= 30 ? totalTransactions : 25}>
                        {totalTransactions > 25 && totalTransactions <= 30 ? totalTransactions : 25}
                    </option>
                    <option value={totalTransactions > 30 && totalTransactions <= 35 ? totalTransactions : 30}>
                        {totalTransactions > 30 && totalTransactions <= 35 ? totalTransactions : 30}
                    </option>
                    <option value={totalTransactions > 35 && totalTransactions <= 40 ? totalTransactions : 35}>
                        {totalTransactions > 35 && totalTransactions <= 40 ? totalTransactions : 35}
                    </option>
                    <option value={totalTransactions > 40 && totalTransactions <= 45 ? totalTransactions : 40}>
                        {totalTransactions > 40 && totalTransactions <= 45 ? totalTransactions : 40}
                    </option>
                    <option value={totalTransactions > 45 && totalTransactions <= 50 ? totalTransactions : 45}>
                        {totalTransactions > 45 && totalTransactions <= 50 ? totalTransactions : 45}
                    </option>
                    <option value={totalTransactions > 50 && totalTransactions <= 55 ? totalTransactions : 50}>
                        {totalTransactions > 50 && totalTransactions <= 55 ? totalTransactions : 50}
                    </option>
                    <option value={100}>100</option>
                </select>
            </div>

            <span>out of {totalTransactions}</span>
        </div> */}
        <BasicPagination count={totalPages} onPageChange={paginate} currentPage={currentPage} />
    </div>
  )
}

export default FullPagination