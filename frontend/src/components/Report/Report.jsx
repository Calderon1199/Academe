import React, { useEffect, useState } from 'react';
import HomeNav from '../HomeNav';
import './Report.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAllReports } from '../../redux/report';

function Reports() {
    const dispatch = useDispatch();
    const allReports = useSelector(state => state.reports.allReports);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(setAllReports(page));
    }, [dispatch, page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    return (
        <div className='report-page'>
            <HomeNav />
            <div>
                <div className='report-header'>
                    <h2>Reports</h2>
                    <div>
                        <button>Today</button>
                        <button>Previous Week</button>
                        <button>Previous Month</button>
                    </div>
                    <div>
                        <h4>Company Reports</h4>
                        <div>
                            <button>All</button>
                            <button>Viewed</button>
                            <button>Seen</button>
                        </div>
                    </div>
                    <div className='report-container'>
                        {allReports.map((report) => (
                            <>
                                <div key={report.id} className='report-row'>
                                    <h5>{report.id}</h5>
                                    <p>{report.notes}</p>
                                    <p>{new Date(report.createdAt).toLocaleString()}</p>
                                </div>
                                <hr className='solid'></hr>
                            </>
                        ))}
                    </div>
                    <div>
                        <button onClick={handlePreviousPage} disabled={page === 1}>Previous page</button>
                        <button onClick={handleNextPage}>Next page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
