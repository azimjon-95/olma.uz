import React from "react";
import "./style.css";

const SkeletonCard = () => {
  return (
    <>
      <div class="col-sm-6 col-md-3">
        <div class="movie--isloading">
          <div class="loading-image"></div>
          <div class="loading-content">
            <div class="loading-text-container">
              <div class="loading-main-text"></div>
              <div class="loading-sub-text"></div>
              <div class="loading-col-text"></div>
              <div class="loading-price-text"></div>
              <div className="loading-btn-box">
                <div class="loading-btn"></div>
                <div class="loading-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
