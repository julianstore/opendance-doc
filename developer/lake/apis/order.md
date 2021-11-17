---
title: Order

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

## OrderCreateRequest

<APIHttpRequest requestType="POST" url="/v1/order-request" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
                  "param":"code",
                  "dataType" : "int",
                  "description":"This is return result code. If succeed returns 0, else returns 50000",
                  "optional":false
              },{
                  "param":"data",
                  "dataType" : "MultisigResponseDTO",
                  "description":"Returns MultisigResponse ",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    MultisigResponseDTO struct {
    	Data MultisigResponse `json:"data"`
    }

    MultisigResponse struct {
    	Type      string    `json:"type"`
    	TraceId   string    `json:"trace_id"`
    	AssetId   string    `json:"asset_id"`
    	Amount    string    `json:"amount"`
    	Threshold int64     `json:"threshold"`
    	Receivers []string  `json:"receivers"`
    	Memo      string    `json:"memo"`
    	CreatedAt time.Time `json:"created_at"`
    	Status    string    `json:"status"`
    	CodeId    string    `json:"code_id"`
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

## OrderCancel

<APIHttpRequest requestType="POST" url="/v1/order/:id/cancel" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"id",
                  "dataType":"string",
                  "description":"This order id to cancel",
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

## OrderDetailByOrderId

<APIHttpRequest requestType="GET" url="/v1/order-trace/:id" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"id",
                  "dataType":"string",
                  "description":"This is order id to get order info",
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
                  "dataType" : "*Order",
                  "description":"Returns pointer to Order",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    Order struct {
    	ID                  int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	OrderID             string    `gorm:"column:order_id;type:varchar(45);index:idx_order_id" json:"order_id"`
    	OrderNum            int64     `gorm:"column:order_num;type:bigint" json:"order_num"`
    	UserID              string    `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	Side                string    `gorm:"column:side;type:varchar(45)" json:"side"`
    	OrderType           string    `gorm:"column:order_type;type:varchar(45)" json:"order_type"`
    	Price               string    `gorm:"column:price;type:varchar(45)" json:"price"`
    	RemainingAmount     string    `gorm:"column:remaining_amount;type:varchar(45)" json:"remaining_amount"`
    	FilledAmount        string    `gorm:"column:filled_amount;type:varchar(45)" json:"filled_amount"`
    	RemainingFunds      string    `gorm:"column:remaining_funds;type:varchar(45)" json:"remaining_funds"`
    	FilledFunds         string    `gorm:"column:filled_funds;type:varchar(45)" json:"filled_funds"`
    	Margin              string    `gorm:"column:margin;type:varchar(45)" json:"margin"`
    	QuoteAssetID        string    `gorm:"column:quote_asset_id;type:varchar(45)" json:"quote_asset_id"`
    	BaseAssetID         string    `gorm:"column:base_asset_id;type:varchar(45)" json:"base_asset_id"`
    	InstrumentName      string    `gorm:"column:instrument_name;type:varchar(45);index:idx_name_exp" json:"instrument_name"`
    	OptionType          string    `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType        string    `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	StrikePrice         string    `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint;index:idx_name_exp" json:"expiration_timestamp"`
    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	QuoteCurrency       string    `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency        string    `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`
    	OrderStatus         int8      `gorm:"column:order_status;type:tinyint" json:"order_status"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	OrderNumString      string    `gorm:"-" json:"order_num_string"`
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

## Page

<APIHttpRequest requestType="GET" url="/v1/orders" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"status",
                  "dataType":"string",
                  "description":"This is status ",
                  "optional":false
              },{
                  "param":"order",
                  "dataType":"string",
                  "description":"This is order ",
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
                  "dataType" : "struct",
                  "description":"Returns records, total, pages ",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    struct {
    	records : []*Order
    	total : int64
        pages : int64
    }

    Order struct {
    	ID                  int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	OrderID             string    `gorm:"column:order_id;type:varchar(45);index:idx_order_id" json:"order_id"`
    	OrderNum            int64     `gorm:"column:order_num;type:bigint" json:"order_num"`
    	UserID              string    `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	Side                string    `gorm:"column:side;type:varchar(45)" json:"side"`
    	OrderType           string    `gorm:"column:order_type;type:varchar(45)" json:"order_type"`
    	Price               string    `gorm:"column:price;type:varchar(45)" json:"price"`
    	RemainingAmount     string    `gorm:"column:remaining_amount;type:varchar(45)" json:"remaining_amount"`
    	FilledAmount        string    `gorm:"column:filled_amount;type:varchar(45)" json:"filled_amount"`
    	RemainingFunds      string    `gorm:"column:remaining_funds;type:varchar(45)" json:"remaining_funds"`
    	FilledFunds         string    `gorm:"column:filled_funds;type:varchar(45)" json:"filled_funds"`
    	Margin              string    `gorm:"column:margin;type:varchar(45)" json:"margin"`
    	QuoteAssetID        string    `gorm:"column:quote_asset_id;type:varchar(45)" json:"quote_asset_id"`
    	BaseAssetID         string    `gorm:"column:base_asset_id;type:varchar(45)" json:"base_asset_id"`
    	InstrumentName      string    `gorm:"column:instrument_name;type:varchar(45);index:idx_name_exp" json:"instrument_name"`
    	OptionType          string    `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType        string    `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	StrikePrice         string    `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint;index:idx_name_exp" json:"expiration_timestamp"`
    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	QuoteCurrency       string    `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency        string    `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`
    	OrderStatus         int8      `gorm:"column:order_status;type:tinyint" json:"order_status"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	OrderNumString      string    `gorm:"-" json:"order_num_string"`
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

## OpenOrders

<APIHttpRequest requestType="GET" url="/v1/open-orders" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
                  "param":"orders",
                  "description":"This is orders param",
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
                  "dataType" : "[]*Order",
                  "description":"Returns array of pointer to Order",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    Order struct {
    	ID                  int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	OrderID             string    `gorm:"column:order_id;type:varchar(45);index:idx_order_id" json:"order_id"`
    	OrderNum            int64     `gorm:"column:order_num;type:bigint" json:"order_num"`
    	UserID              string    `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	Side                string    `gorm:"column:side;type:varchar(45)" json:"side"`
    	OrderType           string    `gorm:"column:order_type;type:varchar(45)" json:"order_type"`
    	Price               string    `gorm:"column:price;type:varchar(45)" json:"price"`
    	RemainingAmount     string    `gorm:"column:remaining_amount;type:varchar(45)" json:"remaining_amount"`
    	FilledAmount        string    `gorm:"column:filled_amount;type:varchar(45)" json:"filled_amount"`
    	RemainingFunds      string    `gorm:"column:remaining_funds;type:varchar(45)" json:"remaining_funds"`
    	FilledFunds         string    `gorm:"column:filled_funds;type:varchar(45)" json:"filled_funds"`
    	Margin              string    `gorm:"column:margin;type:varchar(45)" json:"margin"`
    	QuoteAssetID        string    `gorm:"column:quote_asset_id;type:varchar(45)" json:"quote_asset_id"`
    	BaseAssetID         string    `gorm:"column:base_asset_id;type:varchar(45)" json:"base_asset_id"`
    	InstrumentName      string    `gorm:"column:instrument_name;type:varchar(45);index:idx_name_exp" json:"instrument_name"`
    	OptionType          string    `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType        string    `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	StrikePrice         string    `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint;index:idx_name_exp" json:"expiration_timestamp"`
    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	QuoteCurrency       string    `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency        string    `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`
    	OrderStatus         int8      `gorm:"column:order_status;type:tinyint" json:"order_status"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	OrderNumString      string    `gorm:"-" json:"order_num_string"`
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

## OpenOrdersBeforeNow

<APIHttpRequest requestType="GET" url="/v1/open-orders/before-now" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"side",
                  "side":"string",
                  "description":"This is side ",
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
                  "dataType" : "[]*Order",
                  "description":"Returns array of pointer to Order",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    Order struct {
    	ID                  int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	OrderID             string    `gorm:"column:order_id;type:varchar(45);index:idx_order_id" json:"order_id"`
    	OrderNum            int64     `gorm:"column:order_num;type:bigint" json:"order_num"`
    	UserID              string    `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	Side                string    `gorm:"column:side;type:varchar(45)" json:"side"`
    	OrderType           string    `gorm:"column:order_type;type:varchar(45)" json:"order_type"`
    	Price               string    `gorm:"column:price;type:varchar(45)" json:"price"`
    	RemainingAmount     string    `gorm:"column:remaining_amount;type:varchar(45)" json:"remaining_amount"`
    	FilledAmount        string    `gorm:"column:filled_amount;type:varchar(45)" json:"filled_amount"`
    	RemainingFunds      string    `gorm:"column:remaining_funds;type:varchar(45)" json:"remaining_funds"`
    	FilledFunds         string    `gorm:"column:filled_funds;type:varchar(45)" json:"filled_funds"`
    	Margin              string    `gorm:"column:margin;type:varchar(45)" json:"margin"`
    	QuoteAssetID        string    `gorm:"column:quote_asset_id;type:varchar(45)" json:"quote_asset_id"`
    	BaseAssetID         string    `gorm:"column:base_asset_id;type:varchar(45)" json:"base_asset_id"`
    	InstrumentName      string    `gorm:"column:instrument_name;type:varchar(45);index:idx_name_exp" json:"instrument_name"`
    	OptionType          string    `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType        string    `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	StrikePrice         string    `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint;index:idx_name_exp" json:"expiration_timestamp"`
    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	QuoteCurrency       string    `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency        string    `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`
    	OrderStatus         int8      `gorm:"column:order_status;type:tinyint" json:"order_status"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	OrderNumString      string    `gorm:"-" json:"order_num_string"`
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
