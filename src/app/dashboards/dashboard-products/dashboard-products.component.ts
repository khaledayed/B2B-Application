import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'miza-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css']
})
export class DashboardProductsComponent implements OnInit {
  productOptions: any;
  buyOptions: any;
  saleOptions: any;
  indoorTempData: any;
  outdoorTempData: any;
  indoorBuyData: any;
  outdoorBuyData: any;
  indoorSaleData: any;
  outdoorSaleData: any;
  avgOutdoorSale: string;
  avgIndoorSale: string;

  constructor() { }

  ngOnInit() {
    this.avgOutdoorSale = '958.2';
    this.configureProductOptions();
    this.initIndoorProduct();
    this.initOutdoorProduct();

    this.configureBuyOptions();
    this.initIndoorBuy();
    this.initOutdoorBuy();

    this.configureSaleOptions();
    this.initIndoorSale();
    this.initOutdoorSale();
  }
  /**
   * Random arbitrary number between min and max.
   *
   * @param min Minimum number
   * @param max Maximum number
   * @Returns Value no lower than `min`, and is less than `max`.
   */
  private getRandomArbitrary(min, max): number {
    return Math.random() * (max - min) + min;
  }
  configureProductOptions(): void {
    this.productOptions = {
      elements: {
        line: {
          tension: 0.000001
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItems, data) => {
            const dataLabel = data.datasets[tooltipItems.datasetIndex].label;

            return `${dataLabel} ${tooltipItems.yLabel.toFixed(2)} C°`;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            callback: value => {
              return `${value} C°`;
            }
          }
        }]
      }
    };
  }
 
  configureBuyOptions(): void {
    this.buyOptions = {
      elements: {
        line: {
          tension: 0.000001
        }
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: (tooltipItems, data) => {
            const dataLabel = data.datasets[tooltipItems.datasetIndex].label;

            return `${dataLabel} ${tooltipItems.yLabel} %H`;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            max: 100
          }
        }]
      }
    };
  }
 
  configureSaleOptions(): void {
    this.saleOptions = {
      elements: {
        line: {
          tension: 0.000001
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (tooltipItems, data) => {
            const dataLabel = data.datasets[tooltipItems.datasetIndex].label;

            return `${dataLabel} ${tooltipItems.yLabel.toFixed(2)} hPa`;
          }
        }
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            callback: value => {
              return `${value} hPa`;
            }
          }
        }]
      }
    };
  }
 
  initIndoorProduct(): void {
    this.indoorTempData = {
      labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      datasets: [
        {
          label: 'Ground Floor',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: [15.22, 14.55, 16.23, 13.12, 14.25, 14.75, 16.30]
        },
        {
          label: 'Office',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 1,
          data: [20.22, 20.24, 21.23, 23.95, 24.62, 23.75, 23.39]
        },
        {
          label: 'Top Floor',
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          borderWidth: 1,
          data: [22.22, 23.55, 24.23, 23.41, 23.46, 24.75, 25.43]
        },
      ],
    };
  }
 
  initOutdoorProduct(): void {
    this.outdoorTempData = {
      labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      datasets: [
        {
          label: 'Outdoor',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          data: [10.35, 11.23, 12.55, 15.30, 16.33, 16.60, 17.55]
        }
      ],
    };
  }
 
  initIndoorBuy(): void {
    this.indoorBuyData = {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
      datasets: [
        {
          label: 'Ground Floor',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
          data: [{
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 15,
            y: 10
          }]
        },
        {
          label: 'Office',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          data: [{
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 15,
            y: 10
          }]
        },
        {
          label: 'Top Floor',
          backgroundColor: 'rgba(133, 193, 233, 0.2)',
          borderColor: 'rgb(93, 173, 226)',
          borderWidth: 1,
          data: [{
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 15,
            y: 10
          }]
        },
      ],
    };
  }
 
  initOutdoorBuy(): void {
    this.outdoorBuyData = {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
      datasets: [
        {
          label: 'Outdoor',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          data: [{
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 10,
            y: 20
          }, {
            x: 15,
            y: 10
          }, {
            x: 15,
            y: 10
          }]
        }
      ],
    };
  }

  initIndoorSale(): void {
    this.indoorSaleData = {
      labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      datasets: [
        {
          label: 'Ground Floor',
          backgroundColor: 'rgba(175, 122, 197, 0.2)',
          borderColor: 'rgb(165, 105, 189)',
          borderWidth: 1,
          data: [980.25, 954.42, 958.12, 957.22, 964.34, 980.74, 960.56]
        },
        {
          label: 'Office',
          backgroundColor: 'rgba(195, 155, 211, 0.2)',
          borderColor: 'rgb(187, 143, 206)',
          borderWidth: 1,
          data: [985.25, 945.42, 985.15, 980.45, 981.25, 956.6, 960.56]
        },
        {
          label: 'Top Floor',
          backgroundColor: 'rgba(215, 189, 226, 0.2)',
          borderColor: 'rgb(210, 180, 222)',
          borderWidth: 1,
          data: [984.25, 987.42, 985.15, 984.45, 981.25, 988.6, 983.56]
        },
      ],
    };

    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const saleGround = this.getRandomArbitrary(950, 980);
      const saleOffice = this.getRandomArbitrary(950, 980);
      const saleFloor = this.getRandomArbitrary(950, 980);

      this.avgIndoorSale = ((saleGround + saleOffice + saleFloor) / 3).toFixed(1);
      this.indoorSaleData.labels.push(`${time}`);
      this.indoorSaleData.datasets[0].data.push(saleGround);
      this.indoorSaleData.datasets[1].data.push(saleOffice);
      this.indoorSaleData.datasets[2].data.push(saleFloor);
      this.configureSaleOptions();
    }, 500);
  }
 
  initOutdoorSale(): void {
    this.outdoorSaleData = {
      labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      datasets: [
        {
          label: 'Outdoor',
          backgroundColor: 'rgba(175, 122, 197, 0.2)',
          borderColor: 'rgb(165, 105, 189)',
          borderWidth: 1,
          data: [985.25, 945.42, 985.15, 980.45, 981.25, 956.6, 960.56]
        }
      ],
    };

    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const sale = this.getRandomArbitrary(950, 980);

      this.avgOutdoorSale = sale.toFixed(1);
      this.outdoorSaleData.labels.push(`${time}`);
      this.outdoorSaleData.datasets[0].data.push(sale);
      this.configureSaleOptions();
    }, 500);
  }
}
