import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import { Product } from '../../../shared/entities/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-price-history-chart',
  templateUrl: './price-history-chart.component.html',
  styleUrls: ['./price-history-chart.component.css']
})
export class PriceHistoryChartComponent implements OnInit {
  private data = [
    {
      name: 'מוצר ',
      data: []
    }];

  public product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: number = +params['id'];
      if (id) {
        this.getProductDetails(id);
      }
    })
  }

  getProductDetails(productId: number): any {
    this.productService.getProductDetails(productId).subscribe(
      (data) => {
        debugger;
        this.product = data[0];
        this.setChartData();
        this.renderChart();
      }
    );

    return this.product;
  }

  setChartData() {
    debugger;
    let pricesArray = this.product.oldPriceArray;
    let arrayPrices = [];

    if (pricesArray) {
      // sort the data by the datetime
      for (var i = 0; i < pricesArray.length - 1; i++) {
        for (var x = 0; x < pricesArray.length - 1; x++) {
          if (pricesArray[x].createdTime > pricesArray[x + 1].createdTime) {
            var theGreater = pricesArray[x];
            pricesArray[x] = pricesArray[x + 1];
            pricesArray[x + 1] = theGreater;
          }
        }
      }

      // setting the data
      for (var i = 0; i < pricesArray.length; i++) {
        arrayPrices.push(pricesArray[i].curr);
      }
    }
    arrayPrices.push(this.product.price);
    this.data[0].data = arrayPrices;
  }

  renderChart() {
    jQuery('#container').highcharts({
      chart: {
        type: 'area'
      },
      title: {
        text: 'גרף של היסטוריית מחירים על מוצר'
      },
      subtitle: {
        text: 'היסטוריית מחירים של מוצר ספיצפי'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      yAxis: {
        title: {
          text: 'מחירים של המוצר'
        },
        labels: {
          formatter: function () {
            return this.value / 1 + 'שקל';
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
        '<br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 2000,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: this.data
    });
  }
}
