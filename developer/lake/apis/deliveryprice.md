---
title: Delivery Price

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

## DeliveryPrice

<APIHttpRequest requestType="GET" url="/v1/delivery-price" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"date",
                  "dataType":"string",
                  "description":"This is date param",
                  "optional":false
              },{
                  "param":"asset",
                  "dataType":"string",
                  "description":"This is asset param",
                  "optional":true
              }]'
/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "string",
        "description":"Returns price",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

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

## DeliveryPrices

<APIHttpRequest requestType="GET" url="/v1/delivery-prices" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"asset",
                  "dataType":"string",
                  "description":"This is primary param",
                  "optional":false
              }]'
/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "[]*DeliveryPrice",
        "description":"Returns Delivery Price list",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

    DeliveryPrice struct {
    	ID        int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	Asset     string    `gorm:"column:asset;type:varchar(45);" json:"asset"`
    	Date      string    `gorm:"column:date;type:varchar(45);unique;" json:"date"`
    	Price     string    `gorm:"column:price;type:varchar(45);" json:"price"`
    	CreatedAt time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
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
