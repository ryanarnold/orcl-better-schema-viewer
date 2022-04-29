import React, { Component } from 'react';
import axios from 'axios';

export class SchemaDefinition extends Component {
  constructor(props) {
    super(props);

    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  // componentDidMount() {
  //   const { xml } = this.props;

  //   axios({
  //     method: 'post',
  //     url: 'https://xpath-builder.herokuapp.com/',
  //     data: { xml },
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   })
  //   // axios.post({url: 'https://xpath-builder.herokuapp.com/', data: { xml: xml2 }, headers: { "Content-Type": "multipart/form-data" })
  //     .then((response) => {
  //       const { paths } = response.data;
  //       this.setState({
  //         xmlData: paths,
  //       });
  //     });
  // }

  // eslint-disable-next-line class-methods-use-this
  findXpath(line, xmlData) {
    const xml = xmlData.find((x) => x.line === line.trim());

    if (xml) {
      console.log(xml.xpath);
      return xml.xpath;
    }
    return '';
  }

  render() {
    const { xmlData } = this.props;
    const { xml } = this.props;
    const xmlLines = xml.split('\n');

    console.log('heyyy');
    console.log(xmlData);

    // // eslint-disable-next-line max-len
    // const xmlJsx = ;

    // console.log(xmlJsx);

    // eslint-disable-next-line max-len
    return <div>{xmlLines.map((line) => <pre xpath={this.findXpath(line, xmlData)}>{line}</pre>)}</div>;
    // return <div>xmlJsx</div>;
  }
}

export default SchemaDefinition;
