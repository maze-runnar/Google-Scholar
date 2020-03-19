import React from 'react';
import { Row, Col, Card } from 'antd';
import Hindex1 from '../assets/hindex.png';
import Hindex2 from '../assets/hindexvisual.png';
import Mindex from '../assets/mindex.png';
import Gindex from '../assets/gindex.png';
import TNC from '../assets/TNC.jpg';
import Oindex from '../assets/oindex.png'; 


const Info = () => {
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontWeight:"bold", fontSize: '300%', marginTop:'20px'}}>Metrics Information</h1>
      </div>
      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray'}}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>H-Index</h1>
        <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
        <h3>H-index is the largest number h such that h publications have at least h citations.</h3>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} style={{padding:'10px'}}>
            <img src={Hindex2} alt="hgraph" border="0" width="80%"/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} style={{padding:'10px'}}>
            <img src={Hindex1} alt="hindex" border="0" width ="100%" height="150%"/>
          </Col>
        </Row>
      </div>
      </Card>

      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>M-Index</h1>
          <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
          <h3>m-index is another variant of the h-index that displays h-index per year since first publication. The
          h-index tends to increase with career length, and m-index can be used in situations where this is a
          shortcoming, such as comparing researchers within a field but with very different career lengths. The
          m-index inherently assumes unbroken research activity since the first publication.</h3>
          <Row >
            <Col xs={24} sm={24} md={24} lg={24} style={{padding:'10px'}}>
              <img src={Mindex} alt="m-index" border="0" width="90%" />
            </Col>

          </Row>
        </div>
      </Card>

      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>G-Index</h1>
            <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
            <h3>g-index is a variant of the h-index that, in its calculation, gives credit for the most highly
            cited papers in a data set. The g-index is always the same as or higher than the h-index.</h3>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} style={{padding:'10px'}}>
                <img src={Gindex} alt="g-index" border="0" width = "90%"/>
              </Col>

            </Row>
          </div>
      </Card>

      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
          <div style={{textAlign: 'center', padding:'30px'}}>
            <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>TNc</h1>
            <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
            <h3>TNC is the sum of "Ncitations" column from the profile, i.e., the sum of,
               citations recieved for a publication normalized by number of co-Author's worked for that publication.</h3>
          </div>
      </Card>

      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>TNCc</h1>
            <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
            <h3>Total Normalized Citations(TNCc) normalized per country. As the name suggests the metric is computed taking Author's country into consideration. We use "Citations per document" data as per source. The data can bee seen here <a href="https://www.scimagojr.com/countryrank.php">
              data</a>
            </h3>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} style={{padding:'10px'}}>
              <img src={TNC} alt="TNC" border="0" width="50%"/>
              </Col>
            </Row>
          </div>
      </Card>


      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>O-Index</h1>
            <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
            <h3>The o-index corresponds to the geometric mean of the h-index and the most cited paper of a researcher.
            </h3>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} style={{padding:'10px'}}>
              <img src={Oindex} alt="o-index" border="0" width="50%"/>
              </Col>
            </Row>
          </div>
      </Card>

      <Card style = {{boxShadow: '3px 3px 5px 6px lightgray', marginTop:'15px'}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{paddingTop:'20px', fontWeight:'bold'}}>H-Median</h1>
            <hr  style={{width:'20%', backgroundColor:'green', height:'5px'}}/>
            <h3>h-median is the geometric median of the number of citations in the set of
               the top-cited h articles of a publication. For example, a publication with
               itations 18, 7, 6, 3 and 2 respectively has a h-index of 3.
               Its top-cited article set is the h-median is its geometric
               median, which is 7.
            </h3>
          </div>
      </Card>


    </div>

  );
}
export default Info;
