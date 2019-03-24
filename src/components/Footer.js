import React, { Component } from "react";
import { DataConsumer } from "../context";

export class Footer extends Component {
  render() {
      const developer = process.env.REACT_APP_DEVELOPER_ID;
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="footer-style">
              <ul>
                <DataConsumer>
                  {value => {
                    return value.footer.map(item => {
                      return (
                        <li key={item.id}>
                          <a
                            href={item.network}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={item.icon} />
                          </a>
                        </li>
                      );
                    });
                  }}
                </DataConsumer>
              </ul>
              <p>Website Designed by {developer}</p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
