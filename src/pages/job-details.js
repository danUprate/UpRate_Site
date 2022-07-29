import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export { JobDetails }

const JobDetails = () => {
    const history = useNavigate();

  return (
    <div className="jobs-board content-view">
        <div className="header-bar">
            <button className="back-btn" onClick={() => history(-1)}>Back!</button>
            <h1 className="ts-3">Job Details</h1>
        </div>

        <div className="footer-bar">
            <Link className="btn btn--sm" to="/">Apply</Link>
        </div>

        <div className="padding-top-30">

            <div className="job-card">
                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>

                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>
            </div>

            <div className="job-card">
                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>

                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>
            </div>

            <div className="job-card">
                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>

                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>
            </div>

            <div className="job-card">
                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>

                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>
            </div>

            <div className="job-card">
                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>

                <p>Cillum consequat ad tempor amet anim voluptate anim aliquip. Magna ut Lorem veniam adipisicing laborum. Ullamco magna ut aute duis excepteur non amet. Nostrud deserunt amet enim ex pariatur adipisicing dolore proident sit nostrud dolore do. Eu veniam aute excepteur irure nulla id non eiusmod quis commodo incididunt id est. Fugiat magna est qui cupidatat ad deserunt aliqua.</p>
            </div>
        </div>
    </div>
  )
}