import React from "react"

import Cross from "../../icons/xmark-solid.svg"

const Info = ({ infoOpen, setInfoOpen }) => {
  const handleClasses = (infoOpen) => {
    let classes = infoOpen ? "info-container open" : "info-container"
    return classes
  }

  return (
    <div className={handleClasses(infoOpen)}>
      <div className="info-inner">
        <div className="top">
          <button
            className="closeInfo"
            id="closeInfo"
            onClick={() => {
              setInfoOpen(false)
            }}
          >
            <img
              src={Cross}
              className="close-icon"
              width="25"
              height="25"
              alt="close"
            />
          </button>
        </div>
        <div className="bottom">
          <p>
            National Eye Health Week, a vital public health campaign, returns
            from Monday, 18th to Sunday, 24th September, dedicated to enhancing
            the nation’s eye health. Join us in making a difference by raising
            awareness and taking action. Together, we can transform lives
            through improved vision. To learn more about the campaign and how
            you can get involved, reach out to us at info@visionmatters.org.uk.
            Let’s see a brighter future together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info
