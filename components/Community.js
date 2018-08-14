import React from 'react'
import Button from './Button'
import TwitterLogo from './TwitterLogo'
import SlackLogo from './SlackLogo'
import FaceBookLogo from './FaceBookLogo'
import MeetupLogo from './MeetupLogo'

export default ({ slack }) => (
  <React.Fragment>
    <ul className="root">
      <li>
        <a href="https://twitter.com/HannoverGophers" target="_blank">
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/hannover.gophers/" target="_blank">
          <FaceBookLogo />
        </a>
      </li>
      <li>
        <a href="https://hannover-gophers.slack.com">
          <SlackLogo />
        </a>
      </li>
      <li>
        <a href="https://www.meetup.com/de-DE/Hannover-Gophers/">
          <MeetupLogo />
        </a>
      </li>
      <style jsx>{`
        ul {
          display: flex;
          list-style-type: none;
          margin: 0 auto;
          padding: 0;
          width: 500px;
        }
        li {
          flex: 1;
        }
        @media (max-width: 600px) {
          ul {
            width: auto;
            justify-content: center;
            flex-direction: column;
          }
        }
      `}</style>
    </ul>
  </React.Fragment>
)
