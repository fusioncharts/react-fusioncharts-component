import React from 'react';
import DrillDown from './DrillDown';
import ReactFC from '../lib/ReactFC';

const zerothDataScource = {
  chart: {
    caption: 'ZEROTH DRILL DOWN',
    theme: 'fusion',
  },
  data: [
    {
      value: 190
    },
    {
      value: 50
    },
    {
      value: 280
    },
  ]
};

const firstDataSource = {
  chart: {
    caption: 'FIRST CHILD',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'fusion',
  },
  data: [{
    label: 'Bakersfield Central',
    value: '880000',
  },
  {
    label: 'Garden Groove harbour',
    value: '730000',
  },
  {
    label: 'Los Angeles Topanga',
    value: '590000',
  },
  {
    label: 'Compton-Rancho Dom',
    value: '520000',
  },
  {
    label: 'Daly City Serramonte',
    value: '330000',
  },
  ],
};

const secondDataSource = {
  "chart": {
    "caption": "SECOND CHILD",
    "subCaption": "For a net-worth of $1M",
    "showValues": "1",
    "showPercentInTooltip": "0",
    "numberPrefix": "$",
    "enableMultiSlicing": "1",
    "theme": "fusion"
  },
  "data": [{
    "label": "Equity",
    "value": "300000"
  }, {
    "label": "Debt",
    "value": "230000"
  }, {
    "label": "Bullion",
    "value": "180000"
  }, {
    "label": "Real-estate",
    "value": "270000"
  }, {
    "label": "Insurance",
    "value": "20000"
  }
  ]
};

const thirdDataSource = {
  "chart": {
    "caption": "THIRD CHILD",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  "data": [{
    "label": "Venezuela",
    "value": "290"
  },
  {
    "label": "Saudi",
    "value": "260"
  },
  {
    "label": "Canada",
    "value": "180"
  },
  {
    "label": "Iran",
    "value": "140"
  },
  {
    "label": "Russia",
    "value": "115"
  },
  {
    "label": "UAE",
    "value": "100"
  },
  {
    "label": "US",
    "value": "30"
  },
  {
    "label": "China",
    "value": "30"
  }
  ]
};

class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mappedIds: [0, 1, 2, 3],
      dataSource: {
        chart: {
          caption: 'PARENT',
          subCaption: 'Top 5 stores in last month by revenue',
          numberPrefix: '$',
          theme: 'fusion',
        },
        data: [{
          label: 'Bakersfield Central',
          value: '880000',
        },
        {
          label: 'Garden Groove harbour',
          value: '730000',
        },
        {
          label: 'Los Angeles Topanga',
          value: '590000',
        },
        {
          label: 'Compton-Rancho Dom',
          value: '520000',
        },
        {
          label: 'Daly City Serramonte',
          value: '330000',
        },
        ],
      }
    }
  }

  render() {
    return (
      <div>
        <DrillDown
          type="column2d"
          width='600'
          height='400'
          dataFormat="JSON"
          dataSource={this.state.dataSource}
          mappedIds={this.state.mappedIds}>
          {/* Further Drilled Down */}
          <DrillDown 
            type="column2d"
            width='600'
            height='400'
            dataFormat="JSON"
            dataSource={zerothDataScource}
            mappedIds={[0, 2, 1]}> {/* Maps the position of each nested chart with the data plot of parent chart.*/}
              <ReactFC
                type="bar2d"
                width='600'
                height='400'
                dataFormat="JSON"
                dataSource={firstDataSource} />
              <ReactFC
                type="pie2d"
                width='600'
                height='400'
                dataFormat="JSON"
                dataSource={secondDataSource} />
              <ReactFC
                type="column2d"
                width='600'
                height='400'
                dataFormat="JSON"
                dataSource={thirdDataSource} />
          </DrillDown>
          <ReactFC
            type="pie2d"
            width='600'
            height='400'
            dataFormat="JSON"
            dataSource={firstDataSource} />
          <ReactFC
            type="column2d"
            width='600'
            height='400'
            dataFormat="JSON"
            dataSource={secondDataSource} />
          <ReactFC
            type="bar2d"
            width='600'
            height='400'
            dataFormat="JSON"
            dataSource={thirdDataSource} />
        </DrillDown>
      </div>
    )
  }
}

export default Example;