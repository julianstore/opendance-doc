---
title: User

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

## HandlerUserMe

<APIHttpRequest requestType="POST" url="/v1/user/me" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "*User",
        "description":"Returns current user",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

    User struct {
    	ID           int64     `gorm:"primaryKey;autoIncrement;not null;" json:"-"`
    	MixinUId     string    `gorm:"column:mixin_uid;type:varchar(45)" json:"mixin_uid"`
    	MixinID      string    `gorm:"column:mixin_id;type:varchar(45)" json:"mixin_id"`
    	Nickname     string    `gorm:"column:nickname;type:varchar(45)" json:"nickname"`
    	Avatar       string    `gorm:"column:avatar;type:varchar(200)" json:"avatar"`
    	Type         string    `gorm:"column:type;type:varchar(45)" json:"type"`
    	Email        string    `gorm:"column:email;type:varchar(45)" json:"email"`
    	Phone        string    `gorm:"column:phone;type:varchar(45)" json:"phone"`
    	Status       int8      `gorm:"column:status;type:tinyint" json:"status"`
    	AppMode      int8      `gorm:"column:app_mode;type:tinyint" json:"app_mode"`
    	DeliveryType int8      `gorm:"column:delivery_type;type:tinyint;default:0" json:"delivery_type"`
    	CreatedAt    time.Time `gorm:"column:created_at;type:datetime(6)" json:"created_at"`
    	UpdatedAt    time.Time `gorm:"column:updated_at;type:datetime(6)" json:"updated_at"`
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

## HandlerUserSettings

<APIHttpRequest requestType="GET" url="/v1/user-settings" description = ""/>

<APIParamsTable 
    paramType = "response" 
    params = '[{
        "param":"code",
        "dataType" : "int",
        "description":"This is return result code. If succeed returns 0, else returns 50000",
        "optional":false
    },{
        "param":"data",
        "dataType" : "*SettingsDTO",
        "description":"Returns current user",
        "optional":false
    },{
        "param":"msg",
        "dataType" : "string",
        "description":"This is return message. If succeed returns `success`, else returns error message",
        "optional":false
    }]'
/>

    SettingsDTO struct {
    	AppMode      int8 `json:"app_mode"`
    	DeliveryType int8 `json:"delivery_type"`
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

## HandlerUpdateUserSettings

<APIHttpRequest requestType="POST" url="/v1/user-settings" description = ""/>

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
