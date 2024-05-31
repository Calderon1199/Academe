import React, { useEffect, useState } from 'react';
import HomeNav from '../HomeNav';
import './Report.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAllReports } from '../../redux/report';

function Reports() {
    const dispatch = useDispatch();
    const { allReports, count } = useSelector(state => state.reports);
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        dispatch(setAllReports(page, limit));
    }, [dispatch, page]);

    const totalPages = Math.ceil(count / limit);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    const truncateNotes = (notes) => {
        if (notes.length > 25) {
            return notes.slice(0, 25) + '...';
        }
        return notes;
    };

    return (
        <div className='report-page'>
            <HomeNav />
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
                    <div className='report-header-row'>
                        <h5>Report ID</h5>
                        <h5>Notes</h5>
                        <h5>Behavior</h5>
                        <h5>School</h5>
                        <h5>Admin</h5>
                        <h5>Date</h5>
                    </div>
                    {allReports.map((report) => (
                        <div key={report.id} className='report-row'>
                            <h5>{report.id}</h5>
                            <p className='inline-notes'>{truncateNotes(report.notes)}</p>
                            <h5>{report.behaviorScore}</h5>
                            <h5>
                                <img src={report.School.logo} alt="School Logo" style={{height: '40px', width: '40px', borderRadius: '20px'}} />
                            </h5>
                            <p>{`${report.Admin.firstName} ${report.Admin.lastName}`}</p>
                            <p>{new Date(report.createdAt).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className='pagination-controls'>
                    <button onClick={handlePreviousPage} disabled={page === 1}>Previous page</button>
                    <span>Page {page} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={page === totalPages}>Next page</button>
                </div>
            </div>
        </div>
    );
}

export default Reports;
