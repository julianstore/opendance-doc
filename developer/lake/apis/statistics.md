---
title: Statistics

date: 2021-11-15 11:18:01
---

import {
APIMetaPanel,
APIRequest,
APIEndpoint,
APIParams,
APIPayload,
APIHttpRequest,
APIParamsTable,
} from "@site/src/components/api";

## AnnualSellPutPremium

<APIHttpRequest requestType="GET" url="/v1/statistics/annual-sell-put-premium" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "AnnualProfit",
        "description":"Returns annual profit",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

    AnnualProfit struct {
    	Asset             string          `json:"asset"`
    	TotalAmount       string          `json:"total_amount"`
    	Year              int             `json:"year"`
    	MonthlyProfitList []MonthlyProfit `json:"monthly_profit_list"`
    }

    MonthlyProfit struct {
    	Year   int    `json:"year"`
    	Month  string `json:"month"`
    	Amount string `json:"amount"`
    	Asset  string `json:"asset"`
    }

```json title="Response"
{
  "ts": 1633140945596,
  "data": {
    "oracles": [
      {
        "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "hop": 1800,
        // current price
        "current": "47817.13",
        // next pirce
        "next": "47759.41",
        // the time of latest price
        "peek_at": "2021-04-27T06:00:00Z",
        // the threshold of the consensus
        "threshold": 4,
        // the members who have agreed to the price
        "governors": [
          "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
          "d2d4399d-669d-4448-89f6-d65805e62fb7",
          "1265e53d-3642-484c-9f3d-b8616606fd6d",
          "75f18fe8-b056-46d6-9c48-0214425e58ce"
        ]
      }
      // ...
    ]
  }
}
```

## AnnualSellPutUnderlying

<APIHttpRequest requestType="GET" url="/v1/statistics/annual-sell-put-underlying" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "AnnualProfit",
        "description":"Returns annual profit",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

    AnnualProfit struct {
    	Asset             string          `json:"asset"`
    	TotalAmount       string          `json:"total_amount"`
    	Year              int             `json:"year"`
    	MonthlyProfitList []MonthlyProfit `json:"monthly_profit_list"`
    }

    MonthlyProfit struct {
    	Year   int    `json:"year"`
    	Month  string `json:"month"`
    	Amount string `json:"amount"`
    	Asset  string `json:"asset"`
    }

```json title="Response"
{
  "ts": 1633140945596,
  "data": {
    "oracles": [
      {
        "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "hop": 1800,
        // current price
        "current": "47817.13",
        // next pirce
        "next": "47759.41",
        // the time of latest price
        "peek_at": "2021-04-27T06:00:00Z",
        // the threshold of the consensus
        "threshold": 4,
        // the members who have agreed to the price
        "governors": [
          "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
          "d2d4399d-669d-4448-89f6-d65805e62fb7",
          "1265e53d-3642-484c-9f3d-b8616606fd6d",
          "75f18fe8-b056-46d6-9c48-0214425e58ce"
        ]
      }
      // ...
    ]
  }
}
```
