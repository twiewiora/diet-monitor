import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from 'react-bootstrap/Container';
import CanvasJSReact from '../../canvasjs-2.3.1/canvasjs.react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';


class StatsView extends React.Component {

  render() {
    const happinessChartOptions = {
      animationEnabled: true,
      title:{
        text: 'Samopoczucie w ciągu dnia'
      },
      axisY : {
        title: 'Wskaźnik zadowolnenia',
        includeZero: false,
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: 'spline',
        name: 'Poziom zadowolenia',
        showInLegend: true,
        dataPoints: [
          { y: 30, label: '0:00' },
          { y: 30, label: '7:00' },
          { y: 100, label: '12:00' },
          { y: 100, label: '15:00' },
          { y: 77, label: '17:00' },
          { y: 66, label: '20:00' },
          { y: 66, label: '23:00' },
        ]
      }]
    };

    const nutriChartOptions = {
      animationEnabled: true,
      title:{
        text: 'Spożycie składników spożywczych w ciągu dnia [w gramach]'
      },
      legend:{
        cursor: 'pointer',
      },
      data: [
        {
          type: 'stackedBar',
          name: 'Poniżej normy',
          color: '#ffdf80',
          showInLegend: 'true',
          dataPoints: [
            { label: 'Węglowodany', y: 33 },
            { label: 'Białka', y: 0 },
            { label: 'Tłuszcze', y: 0 },
          ]
        },
        {
          type: 'stackedBar',
          name: 'W normie',
          color: '#00e600',
          showInLegend: 'true',
          dataPoints: [
            { label: 'Węglowodany', y: 0 },
            { label: 'Białka', y: 77 },
            { label: 'Tłuszcze', y: 90 },
          ]
        },
        {
          type: 'stackedBar',
          name: 'Pozwyżej normy',
          color: '#f04242',
          showInLegend: 'true',
          dataPoints: [
            { label: 'Węglowodany', y: 0 },
            { label: 'Białka', y: 20 },
            { label: 'Tłuszcze', y: 0 },
          ]
        },
      ]
    };

    return (

      <div>
        <Container>
          <Row>
            <Col sm={12} xl={6}>
              <CanvasJSReact.CanvasJSChart options = {happinessChartOptions}
                /* onRef={ref => this.chart = ref} */
              />

            </Col>

            <Col sm={12} xl={6}>
              <CanvasJSReact.CanvasJSChart options = {nutriChartOptions}
                /* onRef={ref => this.chart = ref} */
              />

            </Col>
          </Row>


          <Row>
            <Col sm={12} xl={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Potencjalne nietolerancje</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" bgcolor="yellow" >Zwróć uwagę</TableCell>
                    <TableCell align="center" bgcolor="red">Zdecydowanie unikaj</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Orzechy</TableCell>
                    <TableCell align="left">Mięso czerwone</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">Mleko</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </Col>
            <Col sm={12} xl={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Samopoczucie a spozywane posilki</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" bgcolor="Green" >Dobre</TableCell>
                    <TableCell align="center" bgcolor="yellow" >Średnie</TableCell>
                    <TableCell align="center" bgcolor="red">Złe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Musli</TableCell>
                    <TableCell align="left">Jogurt</TableCell>
                    <TableCell align="left">Pizza</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Czekolada</TableCell>
                    <TableCell align="left">Płetwy rekina</TableCell>
                    <TableCell align="left">Kebab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Pieczone jabłka</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">Kawior</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Pieczeń z koźlęcia alpejskiego</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </Col>
          </Row>

        </Container>;
      </div>
    );
  }
}
export default StatsView;