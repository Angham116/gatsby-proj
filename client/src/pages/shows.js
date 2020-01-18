import React, { Component } from 'react';
import axios from 'axios';
import Layout from "../components/layout";

require('dotenv').config();

const token = process.env.REACT_APP_API_TOKEN;

export default class Shows extends Component {
  state = {
    graduates: [],
  }
  async componentDidMount(){
    const data = await axios.get(`https://api.github.com/orgs/facg6/members?access_token=${token}`);
    const { data : graduates } = data;
    this.setState({ graduates });
  }
  render() {
    const { graduates } = this.state;
    return (
      <Layout>
        {graduates.length ?
          graduates.map(graduate => {
            return (
              <div key={Math.random()}>
                {/* {console.log(444444, graduate)} */}
                <h3>{graduate.login}</h3>
                <div>
                  <a href={graduate.repos_url}>Repos: {graduate.repos_url}</a>
                </div>
                <div>
                  <img src={graduate.avatar_url}/>
                </div>
              </div>
            )
          })
          :
          <></>
        }
      </Layout>
    )
  }
}
