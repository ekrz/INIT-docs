/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="wrapperito">
          <Logo img_src={`${baseUrl}img/logo-init-dark.svg`} />
          <span>+</span>
          <svg width="150" height="41" viewBox="0 0 150 41" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.085 13.8469H38.7L38.7 19.2535H41.085C43.185 19.2535 44.145 18.3073 44.145 16.5652C44.145 14.793 43.2 13.8469 41.085 13.8469Z"></path>
            <path d="M60.63 22.6927L65.52 22.6927L63.075 16.2648L60.63 22.6927Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.21865e-06 41L-3.21865e-06 0L150 0L150 41L-3.21865e-06 41ZM20.715 31.193C24.9 31.193 28.26 29.7963 29.445 29.2857V19.5238L21.255 19.5238V23.3535H24.285V26.7176C23.505 27.048 22.695 27.2582 21.57 27.2582C18.105 27.2582 15.66 24.9004 15.66 20.7553C15.66 16.43 18.255 14.1172 22.02 14.1172C24.9 14.1172 26.865 15.1385 28.605 16.5051V11.8044C26.895 10.5128 24.015 9.7619 21.195 9.7619C15.18 9.7619 9.86999 13.8169 9.88499 20.4099C9.88499 27.0029 14.835 31.193 20.715 31.193ZM40.2 22.7527L45.54 30.6073V30.5923H51.525L45.585 22.1971C48.105 21.4161 49.56 19.2084 49.56 16.4901C49.56 13.1861 47.43 10.1974 42.465 10.1974L33.195 10.1974L33.195 30.6073L38.7 30.6073V22.7527H40.2ZM66.855 26.252L68.58 30.6073L74.055 30.6073L65.49 10.1974L60.84 10.1974L52.275 30.6073L57.615 30.6073L59.31 26.252L66.855 26.252ZM89.79 30.6073L93.975 30.6073L93.975 10.1974L89.115 10.1974V21.9267L79.875 10.1974L75.69 10.1974L75.69 30.6073H80.55V18.878L89.79 30.6073ZM97.86 30.6073L103.365 30.6073L103.365 10.1974L97.86 10.1974L97.86 30.6073ZM117.03 14.3575L123.585 14.3575V10.1974L104.97 10.1974V14.3575L111.525 14.3575L111.525 30.6223H117.03L117.03 14.3575ZM130.74 14.3575L139.41 14.3575V10.1974L125.25 10.1974L125.25 30.6073L139.41 30.6073V26.4623L130.74 26.4623V21.9117L137.7 21.9117V17.7967L130.74 17.7967V14.3575Z"></path>
          </svg>
        </div>
        <div className="inner">
         
          {/* <ProjectTitle siteConfig={siteConfig} /> */}
          <p>Granite Digital's front-end kickstarter.</p>
          <PromoSection>
            <Button href="https://bitbucket.org/granitedigital-bitbucket/init/src/master/">Download</Button>
            <Button href="/docs/getting-started/quick-start">Read the documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        {/* <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div> */}
      </div>
    );
  }
}

module.exports = Index;
