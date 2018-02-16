import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-price-history-chart-with-d3js',
  templateUrl: './price-history-chart-with-d3js.component.html',
  styleUrls: ['./price-history-chart-with-d3js.component.css']
})
export class PriceHistoryChartWithD3jsComponent implements OnInit {

  loadAPI: Promise<any>;


  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["chart.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  ngOnInit() {
  }

}
