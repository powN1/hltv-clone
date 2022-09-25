import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import ResultsSectionStyles from "../styles/ResultsSection.module.sass";

const Filters = () => {
  return (
    <div className={ResultsSectionStyles["results-section__left-column__filters"]}>
      <div className={ResultsSectionStyles["results-section__left-column__filters__filters-text"]}>
        Filters
      </div>
      <div className={ResultsSectionStyles["results-section__left-column__filters__ranking"]}>
        <div
          className={ResultsSectionStyles["results-section__left-column__filters__ranking__stars"]}
        >
          <p>Stars</p>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </div>
        <div
          className={
            ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter"]
          }
        >
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__all"
              ]
            }
          >
            All
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__star"
              ]
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </div>

          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__star"
              ]
            }
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__star"
              ]
            }
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__star"
              ]
            }
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__ranking__rating-filter__star"
              ]
            }
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>

      <div className={ResultsSectionStyles["results-section__left-column__filters__time-filter"]}>
        <div
          className={
            ResultsSectionStyles["results-section__left-column__filters__time-filter__time"]
          }
        >
          <p>Time</p>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </div>
        <div
          className={
            ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span"]
          }
        >
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__all-time"
              ]
            }
          >
            All time
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            Last month
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            Last 3 months
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            Last 6 months
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            Last 12 months
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2022
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2021
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2020
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2019
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2018
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2017
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2016
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2015
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2014
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2013
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__year"
              ]
            }
          >
            2012
          </div>
          <div
            className={
              ResultsSectionStyles[
                "results-section__left-column__filters__time-filter__time-span__input-container"
              ]
            }
          >
            <input type="text" placeholder="Start date" />
            <input type="text" placeholder="End date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
