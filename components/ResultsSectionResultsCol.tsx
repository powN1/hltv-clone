import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import cloud9Logo from "../assets/teams/cloud9.svg";
import furiaLogo from "../assets/teams/furia.svg";
import ResultsSectionStyles from "../styles/ResultsSection.module.sass";

const ResultsSectionResultsCol = () => {
  return (
    <div className={ResultsSectionStyles["results-section__results-column"]}>
      <div className={ResultsSectionStyles["results-section__results-column__day-container"]}>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__date"]}
        >
          <p>Results for September 25th 2022</p>
          <div>
            <span>1 - 100 of 70374</span>
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
      </div>
      <div className={ResultsSectionStyles["results-section__results-column__day-container"]}>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__date"]}
        >
          <p>Results for September 26th 2022</p>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
        <div
          className={ResultsSectionStyles["results-section__results-column__day-container__result"]}
        >
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__teams"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <p>Cloud9</p>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
              </div>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__score"
                ]
              }
            >
              <p>2</p>
              <span> - </span>
              <p>1</p>
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__teams__team"
                ]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__results-column__day-container__result__teams__team__logo-container"
                  ]
                }
              >
                <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
              </div>
              <p>FURIA</p>
            </div>
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__event"]
            }
          >
            Esl Pro League Season 16
          </div>
          <div
            className={
              ResultsSectionStyles["results-section__results-column__day-container__result__format"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__results-column__day-container__result__format__stars"
                ]
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>bo3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSectionResultsCol;
