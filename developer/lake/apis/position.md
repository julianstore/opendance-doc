---
title: Position

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

## ExerciseRequest

<APIHttpRequest requestType="POST" url="/v1/exercise-request" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
                  "param":"code",
                  "dataType" : "int",
                  "description":"This is return result code. If succeed returns 0, else returns 50000",
                  "optional":false
              },{
                  "param":"data",
                  "dataType" : "*MultisigResponseDTO",
                  "description":"Returns pointer to MultisigResponseDTO",
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

## ExerciseCashDelivery

<APIHttpRequest requestType="POST" url="/v1/exercise-cash" description = ""/>

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

## ListUserPositions

<APIHttpRequest requestType="GET" url="/v1/positions" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"status",
                  "dataType":"string",
                  "description":"This is status",
                  "optional":false
              },{
                  "param":"order",
                  "dataType":"string",
                  "description":"This is order",
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
                  "dataType" : "struct",
                  "description":"Returns records, total, pages",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    struct {
    	records : []*Position
    	total : int64
        pages : int64
    }

    Position struct {
    	ID             int64   `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	PositionID     string  `gorm:"column:position_id;type:varchar(45);index:idx_position_id" json:"position_id"`
    	PositionNum    int64   `gorm:"column:position_num;type:bigint" json:"position_num"`
    	UserID         string  `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	InstrumentName string  `gorm:"column:instrument_name;type:varchar(45);index:idx_name" json:"instrument_name"`
    	Side           string  `gorm:"column:side;type:varchar(45)" json:"side"`
    	Type           string  `gorm:"column:type;type:varchar(45)" json:"type"`
    	Size           float64 `gorm:"column:size;type:decimal(32,8)" json:"size"`
    	Funds          float64 `gorm:"column:funds;type:decimal(32,8)" json:"funds"`
    	Margin         float64 `gorm:"column:margin;type:decimal(32,8)" json:"margin"`
    	ExercisedSize  float64 `gorm:"column:exercised_size;type:decimal(32,8)" json:"exercised_size"`
    	AveragePrice   float64 `gorm:"column:average_price;type:decimal(32,8)" json:"average_price"`

    	StrikePrice   string `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	OptionType    string `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType  string `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	QuoteCurrency string `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency  string `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`

    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint" json:"expiration_timestamp"`
    	Status              int8      `gorm:"column:status;type:tinyint" json:"status"`
    	Settlement          int8      `gorm:"column:settlement;type:tinyint;default:0" json:"settlement"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	PositionNumString   string    `gorm:"-" json:"position_num_string"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	InitialFunds        float64   `gorm:"-" json:"initial_funds"`
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

## PositionDetail

<APIHttpRequest requestType="GET" url="/v1/position/:id" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"id",
                  "dataType":"string",
                  "description":"This is position id for detail info",
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
                  "dataType" : "*Position",
                  "description":"Returns pointer to Position",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    Position struct {
    	ID             int64   `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	PositionID     string  `gorm:"column:position_id;type:varchar(45);index:idx_position_id" json:"position_id"`
    	PositionNum    int64   `gorm:"column:position_num;type:bigint" json:"position_num"`
    	UserID         string  `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	InstrumentName string  `gorm:"column:instrument_name;type:varchar(45);index:idx_name" json:"instrument_name"`
    	Side           string  `gorm:"column:side;type:varchar(45)" json:"side"`
    	Type           string  `gorm:"column:type;type:varchar(45)" json:"type"`
    	Size           float64 `gorm:"column:size;type:decimal(32,8)" json:"size"`
    	Funds          float64 `gorm:"column:funds;type:decimal(32,8)" json:"funds"`
    	Margin         float64 `gorm:"column:margin;type:decimal(32,8)" json:"margin"`
    	ExercisedSize  float64 `gorm:"column:exercised_size;type:decimal(32,8)" json:"exercised_size"`
    	AveragePrice   float64 `gorm:"column:average_price;type:decimal(32,8)" json:"average_price"`

    	StrikePrice   string `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	OptionType    string `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType  string `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	QuoteCurrency string `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency  string `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`

    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint" json:"expiration_timestamp"`
    	Status              int8      `gorm:"column:status;type:tinyint" json:"status"`
    	Settlement          int8      `gorm:"column:settlement;type:tinyint;default:0" json:"settlement"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	PositionNumString   string    `gorm:"-" json:"position_num_string"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	InitialFunds        float64   `gorm:"-" json:"initial_funds"`
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

## DetailByID

<APIHttpRequest requestType="GET" url="/v2/position/:id" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"id",
                  "description":"This is position id for detail info",
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
                  "dataType" : "*PositionDTO",
                  "description":"Returns pointer to PositionDTO",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    PositionDTO struct {
    	*Position
    	SettlementInfo SettlementInfo `json:"settlement_info"`
    	Exercisable    bool           `json:"exercisable"`
    	Expiry         bool           `json:"expiry"`
    	BtnStatus      string         `json:"btn_status"`
    }

    Position struct {
    	ID             int64   `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	PositionID     string  `gorm:"column:position_id;type:varchar(45);index:idx_position_id" json:"position_id"`
    	PositionNum    int64   `gorm:"column:position_num;type:bigint" json:"position_num"`
    	UserID         string  `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	InstrumentName string  `gorm:"column:instrument_name;type:varchar(45);index:idx_name" json:"instrument_name"`
    	Side           string  `gorm:"column:side;type:varchar(45)" json:"side"`
    	Type           string  `gorm:"column:type;type:varchar(45)" json:"type"`
    	Size           float64 `gorm:"column:size;type:decimal(32,8)" json:"size"`
    	Funds          float64 `gorm:"column:funds;type:decimal(32,8)" json:"funds"`
    	Margin         float64 `gorm:"column:margin;type:decimal(32,8)" json:"margin"`
    	ExercisedSize  float64 `gorm:"column:exercised_size;type:decimal(32,8)" json:"exercised_size"`
    	AveragePrice   float64 `gorm:"column:average_price;type:decimal(32,8)" json:"average_price"`

    	StrikePrice   string `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	OptionType    string `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType  string `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	QuoteCurrency string `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency  string `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`

    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint" json:"expiration_timestamp"`
    	Status              int8      `gorm:"column:status;type:tinyint" json:"status"`
    	Settlement          int8      `gorm:"column:settlement;type:tinyint;default:0" json:"settlement"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	PositionNumString   string    `gorm:"-" json:"position_num_string"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	InitialFunds        float64   `gorm:"-" json:"initial_funds"`
    }

    SettlementInfo struct {
    	Exercised       bool   `json:"exercised"`
    	Underlying      string `json:"underlying"`
    	UnderlyingPrice string `json:"underlying_price"`
    	RefundMargin    string `json:"refund_margin"`
    	BidEarnings     string `json:"bid_earnings"`
    	Size            string `json:"size"`
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

## PositionDetailByInstrumentName

<APIHttpRequest requestType="GET" url="/v1/position-name/:name" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"name",
                  "dataType":"string",
                  "description":"This is instrument name for detail info",
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
                  "dataType" : "*Position",
                  "description":"Returns pointer to Position",
                  "optional":false
              },{
                  "param":"msg",
                  "dataType" : "string",
                  "description":"This is return message. If succeed returns `success`, else returns error message",
                  "optional":false
              }]'
/>

    Position struct {
    	ID             int64   `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	PositionID     string  `gorm:"column:position_id;type:varchar(45);index:idx_position_id" json:"position_id"`
    	PositionNum    int64   `gorm:"column:position_num;type:bigint" json:"position_num"`
    	UserID         string  `gorm:"column:user_id;type:varchar(45)" json:"user_id"`
    	InstrumentName string  `gorm:"column:instrument_name;type:varchar(45);index:idx_name" json:"instrument_name"`
    	Side           string  `gorm:"column:side;type:varchar(45)" json:"side"`
    	Type           string  `gorm:"column:type;type:varchar(45)" json:"type"`
    	Size           float64 `gorm:"column:size;type:decimal(32,8)" json:"size"`
    	Funds          float64 `gorm:"column:funds;type:decimal(32,8)" json:"funds"`
    	Margin         float64 `gorm:"column:margin;type:decimal(32,8)" json:"margin"`
    	ExercisedSize  float64 `gorm:"column:exercised_size;type:decimal(32,8)" json:"exercised_size"`
    	AveragePrice   float64 `gorm:"column:average_price;type:decimal(32,8)" json:"average_price"`

    	StrikePrice   string `gorm:"column:strike_price;type:varchar(45)" json:"strike_price"`
    	OptionType    string `gorm:"column:option_type;type:varchar(45)" json:"option_type"`
    	DeliveryType  string `gorm:"column:delivery_type;type:varchar(45)" json:"delivery_type"`
    	QuoteCurrency string `gorm:"column:quote_currency;type:varchar(45)" json:"quote_currency"`
    	BaseCurrency  string `gorm:"column:base_currency;type:varchar(45)" json:"base_currency"`

    	ExpirationDate      time.Time `gorm:"column:expiration_date;type:datetime" json:"expiration_date"`
    	ExpirationTimestamp int64     `gorm:"column:expiration_timestamp;type:bigint" json:"expiration_timestamp"`
    	Status              int8      `gorm:"column:status;type:tinyint" json:"status"`
    	Settlement          int8      `gorm:"column:settlement;type:tinyint;default:0" json:"settlement"`
    	CreatedAt           time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt           time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
    	PositionNumString   string    `gorm:"-" json:"position_num_string"`
    	TradeList           []*Trade  `gorm:"-" json:"trade_list"`
    	InitialFunds        float64   `gorm:"-" json:"initial_funds"`
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

## PositionStatus

<APIHttpRequest requestType="GET" url="/v1/position-status/:id" description = ""/>

<APIParamsTable 
    paramType = "request" 
    params = '[{
                  "param":"id",
                  "description":"This is position id to get status",
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
                  "dataType" : "int8",
                  "description":"Returns status of position",
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
