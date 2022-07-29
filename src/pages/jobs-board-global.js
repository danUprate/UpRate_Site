import React from "react";
import { Link } from "react-router-dom";

export { JobsBoardGlobal }

const JobsBoardGlobal = () => {

  return (
    <div className="jobs-board content-view">
        <div className="header-bar">
            <h1 className="ts-3">Jobs Board Global</h1>
        </div>

        <div className="jobs-slider jobs-slider--1">
            <h2 className="ts-2 jobs-slider__title">For You</h2>
            <div className="jobs-slider__runner">
                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
                    <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>
            </div>
            <Link className="jobs-slider__link" to="/jobsCategory">View More</Link>
        </div>

        <div className="jobs-slider jobs-slider--2">
            <h2 className="ts-2 jobs-slider__title">UpRate Agency</h2>
            <div className="jobs-slider__runner">
                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>
            </div>
            <Link className="jobs-slider__link" to="/jobsCategory">View More</Link>
        </div>

        <div className="jobs-slider jobs-slider">
            <h2 className="ts-2 jobs-slider__title">UpRate Agency</h2>
            <div className="jobs-slider__runner">
                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>

                <section className="jobs-card jobs-card--small">
                    <h3 className="ts-3">Job Title</h3>
            <p>Non fugiat est cupidatat irure reprehenderit.</p>
                    <Link className="btn" to="/jobDetailed">View Job</Link>
                </section>
            </div>
            <Link className="jobs-slider__link" to="/jobsCategory">View More</Link>
        </div>
        
    </div>
  )
}