import React from "react";
import { Link, useNavigate } from "react-router-dom";

export { JobsBoard }

const JobsBoard = () => {

    const history = useNavigate();

  return (
        <div className="jobs-board content-view">
            <div className="header-bar">
                <button className="back-btn" onClick={() => history(-1)}>Back!</button>
                <h1 className="ts-3">Jobs Board</h1>
            </div>

            <div className="padding-top-30">
                <div className="job-card">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit nostrud incididunt ullamco irure culpa proident officia.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </div>
                <div className="job-card">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit nostrud incididunt ullamco irure culpa proident officia.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </div>
                <div className="job-card">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit nostrud incididunt ullamco irure culpa proident officia.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </div>
                <div className="job-card">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit nostrud incididunt ullamco irure culpa proident officia.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </div>
                <div className="job-card">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit nostrud incididunt ullamco irure culpa proident officia.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </div>
            </div>
        </div>
  )
}