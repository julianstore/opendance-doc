module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Public HTTP API",
      items: [
        "lake/apis/auth",
        "lake/apis/waitlist",
        "lake/apis/od-market",
        "lake/apis/db-market",
      ],
    },
    {
      type: "category",
      label: "Private HTTP API",
      items: [
        "lake/apis/user",
        "lake/apis/order",
        "lake/apis/position",
        "lake/apis/statistics",
        "lake/apis/deliveryprice",
      ],
    },
  ],
};
