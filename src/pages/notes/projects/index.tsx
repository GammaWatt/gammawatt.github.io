import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout.tsx'

const Projects = () => {
  return (
    <Layout>
      <div>
        <h1 style={{
          textAlign: 'center'
          }}>
          Project Templates
        </h1>
        <h2>Foreword</h2>
        <p>
          This page lists the templates to follow for the various projects I
          decide to work on. So, regardless of toolset or workflow, there are
          certain traits and component types that are near-constants; like the
          requirement of a database in almost every project to exist.
        </p>
        <p>
          The projects themselves, here, don't need to actually be functional;
          as in, a trading platform project doesn't actually need to make real 
          trades or take real money or use real payment gateways.
        </p>
        <p>
          Any versions of these projects that use real payment gateways and 
          handle real monetary transactions are commercially intended, and will
          also be advertised on this site as live projects.
        </p>
        <div>
          <h3>Conditions</h3>
          <div>
            <p>
              I'm a cheapstake, and a curious tinkerer. So all projects I work 
              on and list here require the usage of freely-available open source
              software, and are self-hosted and open sourced for people to try 
              out and demo for themselves, if they so choose. For demos of my 
              work, the projects use always-free tiers from IaaS, PaaS, BaaS, 
              DBaaS, and VPS hosting services; unless they are commercial 
              projects, in which case, they must be structured such as to be 
              100% bootstrapped and virtually guaranteed to cover their own 
              usage of these services.
            </p>
            <p>
              From my analysis, so far, the biggest issue appears to be 
              containing and managing marketing and customer acquisition costs 
              and actually getting an ROI on it.
            </p>
          </div>
          <h3>
            Required Features
          </h3>
          <div>
            <ul>
              <li>
                Extensible via an API, plugins, or microservices architecture.
              </li>
              <li>
                Dynamic feature detection and implementation on startup.
              </li>
              <li>
                Setup / runtime configuration handled using yaml files and
                configuration is live reloadable
              </li>
              <li>
                If the system is a server, then new functionality can be added,
                removed, or modified without incurring downtime. Like adding new
                routes to an HTTP server, or changing responses to the ones that
                exist; or adding new services without interruption to existing,
                and incoming, requests.
              </li>
            </ul>
          </div>
          <h3>Design Process and Philosophy</h3>
          <div>
            <p>
              foo
            </p>
          </div>
        </div>
        <h2>
          List of Project Types / Themes
        </h2>
        <div>
          <ul>
            <li>
              <u>eCommerce</u> (Very common in job requests)
              <ul>
                <li>Amazon clone</li>
                <li>eBay clone</li>
                <li>Mercadolibre clone</li>
              </ul>
            </li>
            <li>CMS</li>
            <li>HRMS</li>
            <li>ERM</li>
            <li>CRM</li>
            <li>Trading Platform
              <ul>
                <li>
                  Forex platform
                </li>
                <li>
                  Stock platform
                </li>
                <li>
                  Domain name flipping platform with stock chart interface
                </li>
              </ul>
            </li>
            <li>Wiki Clone</li>
            <li>Meme generator</li>
            <li>BlockChain
              <ul>
                <li>Crypto Currency</li>
                <li>Meme NFTs</li>
              </ul>
            </li>
            <li>Blog</li>
            <li>QA
              <ul>
                <li>StackExchange Clone</li>
              </ul>
            </li>
            <li>Forum</li>
            <li>Social Media
              <ul>
                <li>Facebook clone</li>
                <li>Twitter clone</li>
                <li>Instagram clone</li>
                <li>Pinterest clone</li>
                <li>LinkedIn clone</li>
                <li>Reddit clone</li>
                <li>Tinder clone</li>
              </ul>
            </li>
            <li>Chat app</li>
            <li>Uber clone</li>
            <li>
              Some sort of knowledge graph visualization and interaction / 
              management application (a web frontend using D3js and such)
            </li>
          </ul>
        </div>
        <h2>
          Templates
        </h2>
        <p>
          <Link to='restapi'>RESTful API</Link>
        </p>
        <p>
          RCP
        </p>
        <h2>Current Projects</h2>
        <ul>
          <li>
            <p>
              RESTful API : Headless eCommerce system.
              (Full project includes working front-end)
            </p>
          </li>
          <li>
            <p>
              RESTful API : headless LMS
              (usable for any structure: university, highschool, 
              independent, etc)
              (Full project includes working front-end)
            </p>
          </li><li>
            <p>
              RESTful API : headless CMS
              (Full project includes working front-end)
            </p>
          </li>
          <li>
            <p>
              SOCKS5 Proxy
            </p>
          </li>
          <li>
            <p>
              Uber Clone backend, front-end agnostic.
            </p>
          </li>
          <li>
            <p>
              NFT Crypto for memes.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Projects
