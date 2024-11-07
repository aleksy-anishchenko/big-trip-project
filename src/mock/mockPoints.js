import { adaptPointToClient } from '../utils';

const jsonPoints = [
  {
    "id": "b1202a34-1db7-458f-89ef-c34a2336d4b7",
    "base_price": 4135,
    "date_from": "2024-12-08T17:50:12.490Z",
    "date_to": "2024-12-09T08:42:12.490Z",
    "destination": "b1595610-28d3-4314-96e7-7b6505a70cdf",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "bb2a1e58-0c68-400c-912a-ec1edc2499e1",
    "base_price": 4066,
    "date_from": "2024-12-11T05:34:12.490Z",
    "date_to": "2024-12-12T02:58:12.490Z",
    "destination": "cf440e64-f70f-4e9c-bfbf-4090f80313ce",
    "is_favorite": true,
    "offers": [
      "232ca1b7-aa8e-4327-9d6e-8327daa8faeb",
      "6413d2a2-7550-456a-8ed7-34c01b607763",
      "cf3fcb18-5af8-4044-bdfc-2fe66628998a"
    ],
    "type": "train"
  },
  {
    "id": "8fb887d1-f400-4c43-af7b-474f060b1b56",
    "base_price": 3701,
    "date_from": "2024-12-13T11:20:12.490Z",
    "date_to": "2024-12-14T17:51:12.490Z",
    "destination": "dbfe200b-0baa-497c-ab3d-04244de0dcbf",
    "is_favorite": true,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "99d9f62c-2151-415c-8652-8108e60bf468",
    "base_price": 1605,
    "date_from": "2024-12-16T12:29:12.490Z",
    "date_to": "2024-12-18T04:03:12.490Z",
    "destination": "bdb3a45a-7018-486a-b205-b2cf42fc868c",
    "is_favorite": false,
    "offers": [
      "c9423032-18ba-41e6-9cea-016ce7a887b4"
    ],
    "type": "restaurant"
  },
  {
    "id": "3b212257-aa15-4eb7-b395-f6dc4cd5ca53",
    "base_price": 8319,
    "date_from": "2024-12-19T15:28:12.490Z",
    "date_to": "2024-12-20T00:10:12.490Z",
    "destination": "c92585ab-040e-40a1-8df8-4363df249372",
    "is_favorite": false,
    "offers": [
      "c4d6ff5f-0a53-4fae-87cc-f7b2817ccb20",
      "c9423032-18ba-41e6-9cea-016ce7a887b4"
    ],
    "type": "restaurant"
  },
  {
    "id": "637d7ed6-21fd-4ef0-8f05-bc3c8dfe3698",
    "base_price": 8903,
    "date_from": "2024-12-21T00:55:12.490Z",
    "date_to": "2024-12-22T10:12:12.490Z",
    "destination": "66c05a8a-978e-4eb7-a99c-f2abd8ecce09",
    "is_favorite": false,
    "offers": [
      "d6982df9-2f7a-42cb-b5b8-6638e1c5b1c6",
      "168bfb79-9ea8-43ff-ba47-43ac96acbb3a"
    ],
    "type": "drive"
  },
  {
    "id": "91405f98-3027-4014-802e-0e4ac7dd9ee5",
    "base_price": 2613,
    "date_from": "2024-12-23T21:53:12.490Z",
    "date_to": "2024-12-24T06:26:12.490Z",
    "destination": "65f17626-fc75-4b37-aa79-aa694a3611f7",
    "is_favorite": true,
    "offers": [
      "53f1468e-cdcc-49e3-9e3b-de572f411804",
      "78bee4e3-c1ea-43d1-b060-c5fef0ac218f",
      "b8e7ba66-d0b4-43f2-a02f-ec1081c50f0f",
      "619d6f66-cf35-4ee7-a8cb-c94c152fe0f6",
      "5aa9ae67-7cd5-40f5-bfe3-196d2fda843f"
    ],
    "type": "taxi"
  },
  {
    "id": "5b3eaf7f-76d9-4f1f-893b-53389da88c5a",
    "base_price": 9622,
    "date_from": "2024-12-25T21:50:12.490Z",
    "date_to": "2024-12-27T01:37:12.490Z",
    "destination": "c92585ab-040e-40a1-8df8-4363df249372",
    "is_favorite": true,
    "offers": [
      "6413d2a2-7550-456a-8ed7-34c01b607763",
      "cf3fcb18-5af8-4044-bdfc-2fe66628998a"
    ],
    "type": "train"
  },
  {
    "id": "3e7f18e5-268e-492e-a842-766f228ab6be",
    "base_price": 9927,
    "date_from": "2024-12-27T20:47:12.490Z",
    "date_to": "2024-12-29T21:07:12.490Z",
    "destination": "bc556c30-1dc2-4687-9136-6dddb051a1a8",
    "is_favorite": true,
    "offers": [
      "cf3fcb18-5af8-4044-bdfc-2fe66628998a"
    ],
    "type": "train"
  },
  {
    "id": "cb40d1f6-acae-4ea5-b4c3-ba8723c78db6",
    "base_price": 7349,
    "date_from": "2024-12-30T13:30:12.490Z",
    "date_to": "2024-12-31T23:57:12.490Z",
    "destination": "bc556c30-1dc2-4687-9136-6dddb051a1a8",
    "is_favorite": false,
    "offers": [
      "3067b884-e7d1-4d8f-8597-fa9e8c08cc51",
      "ed488860-df8f-456f-a253-d530d00994c8",
      "19a07c90-dca8-4ca7-874b-bd1b845fb0a7",
      "b0bdfd24-b05a-4c13-86b9-a75aee38c44f",
      "a1c7fb44-d71d-4b85-927c-348e79e6607b"
    ],
    "type": "check-in"
  },
  {
    "id": "1fb06cd6-383b-4730-aab6-e2714f1dbaff",
    "base_price": 2635,
    "date_from": "2025-01-02T10:52:12.490Z",
    "date_to": "2025-01-03T02:38:12.490Z",
    "destination": "65f17626-fc75-4b37-aa79-aa694a3611f7",
    "is_favorite": true,
    "offers": [
      "168bfb79-9ea8-43ff-ba47-43ac96acbb3a"
    ],
    "type": "drive"
  },
  {
    "id": "73af4be9-3972-4038-a200-5270140f6cb1",
    "base_price": 8431,
    "date_from": "2025-01-03T21:22:12.490Z",
    "date_to": "2025-01-04T13:14:12.490Z",
    "destination": "cf440e64-f70f-4e9c-bfbf-4090f80313ce",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "5983dc30-5972-4aab-aa53-57329ae351d3",
    "base_price": 772,
    "date_from": "2025-01-05T15:11:12.490Z",
    "date_to": "2025-01-06T17:14:12.490Z",
    "destination": "66c05a8a-978e-4eb7-a99c-f2abd8ecce09",
    "is_favorite": false,
    "offers": [
      "6f92ec9e-2e9f-4bbc-8d1e-c18b9073815e",
      "76e7233b-68ea-4710-a0bc-3275b7dd35ca",
      "e39be002-289b-4350-810d-5577f13f96b0",
      "124592f2-5895-4741-ac63-f45a20df576c"
    ],
    "type": "flight"
  },
  {
    "id": "17afb4fd-9603-4f82-bf50-59109c199fb9",
    "base_price": 1768,
    "date_from": "2025-01-07T14:37:12.490Z",
    "date_to": "2025-01-08T20:26:12.490Z",
    "destination": "ee31cdc4-80df-4074-b2da-75e5c48cb1a1",
    "is_favorite": false,
    "offers": [
      "6413d2a2-7550-456a-8ed7-34c01b607763",
      "cf3fcb18-5af8-4044-bdfc-2fe66628998a"
    ],
    "type": "train"
  },
  {
    "id": "6a08c20d-5a4d-49e2-a6b3-be78d7f921c8",
    "base_price": 9578,
    "date_from": "2025-01-10T07:19:12.490Z",
    "date_to": "2025-01-11T23:46:12.490Z",
    "destination": "c92585ab-040e-40a1-8df8-4363df249372",
    "is_favorite": false,
    "offers": [],
    "type": "flight"
  },
  {
    "id": "2b47f5f3-22d5-4cfb-a781-d4b72412f1aa",
    "base_price": 1515,
    "date_from": "2025-01-13T06:54:12.490Z",
    "date_to": "2025-01-14T10:04:12.490Z",
    "destination": "dbfe200b-0baa-497c-ab3d-04244de0dcbf",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "051729e3-0f17-445d-8f91-549cf2091176",
    "base_price": 3749,
    "date_from": "2025-01-15T14:49:12.490Z",
    "date_to": "2025-01-16T17:03:12.490Z",
    "destination": "cf440e64-f70f-4e9c-bfbf-4090f80313ce",
    "is_favorite": false,
    "offers": [
      "c4d6ff5f-0a53-4fae-87cc-f7b2817ccb20",
      "c9423032-18ba-41e6-9cea-016ce7a887b4"
    ],
    "type": "restaurant"
  },
  {
    "id": "04a5ad3f-a39b-4e6a-939c-a3250c46ffe0",
    "base_price": 9142,
    "date_from": "2025-01-18T12:27:12.490Z",
    "date_to": "2025-01-20T00:47:12.490Z",
    "destination": "65f17626-fc75-4b37-aa79-aa694a3611f7",
    "is_favorite": false,
    "offers": [
      "b8e7ba66-d0b4-43f2-a02f-ec1081c50f0f",
      "619d6f66-cf35-4ee7-a8cb-c94c152fe0f6",
      "5aa9ae67-7cd5-40f5-bfe3-196d2fda843f"
    ],
    "type": "taxi"
  },
  {
    "id": "2d2a25f1-5801-4519-93d5-247d0da78ad5",
    "base_price": 2659,
    "date_from": "2025-01-21T14:59:12.490Z",
    "date_to": "2025-01-23T02:37:12.490Z",
    "destination": "dbfe200b-0baa-497c-ab3d-04244de0dcbf",
    "is_favorite": false,
    "offers": [],
    "type": "drive"
  },
  {
    "id": "deda34ce-1a8d-4173-84b6-3bf6b70bf11c",
    "base_price": 2982,
    "date_from": "2025-01-23T20:15:12.490Z",
    "date_to": "2025-01-25T00:21:12.490Z",
    "destination": "65f17626-fc75-4b37-aa79-aa694a3611f7",
    "is_favorite": false,
    "offers": [
      "53f1468e-cdcc-49e3-9e3b-de572f411804",
      "78bee4e3-c1ea-43d1-b060-c5fef0ac218f",
      "b8e7ba66-d0b4-43f2-a02f-ec1081c50f0f",
      "619d6f66-cf35-4ee7-a8cb-c94c152fe0f6",
      "5aa9ae67-7cd5-40f5-bfe3-196d2fda843f"
    ],
    "type": "taxi"
  },
  {
    "id": "270819a1-fc76-4a4f-8a10-33570f38c6a0",
    "base_price": 8227,
    "date_from": "2025-01-26T02:40:12.490Z",
    "date_to": "2025-01-27T06:12:12.490Z",
    "destination": "dbfe200b-0baa-497c-ab3d-04244de0dcbf",
    "is_favorite": false,
    "offers": [
      "78bee4e3-c1ea-43d1-b060-c5fef0ac218f",
      "b8e7ba66-d0b4-43f2-a02f-ec1081c50f0f",
      "619d6f66-cf35-4ee7-a8cb-c94c152fe0f6",
      "5aa9ae67-7cd5-40f5-bfe3-196d2fda843f"
    ],
    "type": "taxi"
  },
  {
    "id": "bdfc2f32-88c3-4ebf-a370-7786ccc2958d",
    "base_price": 1917,
    "date_from": "2025-01-29T04:51:12.490Z",
    "date_to": "2025-01-30T06:40:12.490Z",
    "destination": "66c05a8a-978e-4eb7-a99c-f2abd8ecce09",
    "is_favorite": false,
    "offers": [
      "3067b884-e7d1-4d8f-8597-fa9e8c08cc51",
      "ed488860-df8f-456f-a253-d530d00994c8",
      "19a07c90-dca8-4ca7-874b-bd1b845fb0a7",
      "b0bdfd24-b05a-4c13-86b9-a75aee38c44f",
      "a1c7fb44-d71d-4b85-927c-348e79e6607b"
    ],
    "type": "check-in"
  },
  {
    "id": "4814ee2a-ae9d-43f9-a888-20d15b875064",
    "base_price": 4370,
    "date_from": "2025-01-31T19:36:12.490Z",
    "date_to": "2025-02-02T08:53:12.490Z",
    "destination": "bc556c30-1dc2-4687-9136-6dddb051a1a8",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "db7f859c-d288-4d47-9169-35d6538ada46",
    "base_price": 6487,
    "date_from": "2025-02-03T15:44:12.490Z",
    "date_to": "2025-02-04T10:31:12.490Z",
    "destination": "41c8c5a1-4e5f-4830-952d-24ef352f0b50",
    "is_favorite": false,
    "offers": [
      "a664c29c-ed6e-4f63-a052-c6a5adc1031e",
      "399a112f-361a-4e5a-988b-06b05aeb3b8a",
      "a3840391-fac7-4db7-8531-5cf9814f1083"
    ],
    "type": "bus"
  },
  {
    "id": "b05568f3-aeeb-457b-9f42-55f67ca6643d",
    "base_price": 7362,
    "date_from": "2025-02-05T15:06:12.490Z",
    "date_to": "2025-02-07T05:59:12.490Z",
    "destination": "bc556c30-1dc2-4687-9136-6dddb051a1a8",
    "is_favorite": false,
    "offers": [
      "6f92ec9e-2e9f-4bbc-8d1e-c18b9073815e",
      "76e7233b-68ea-4710-a0bc-3275b7dd35ca",
      "e39be002-289b-4350-810d-5577f13f96b0",
      "124592f2-5895-4741-ac63-f45a20df576c"
    ],
    "type": "flight"
  }
];

const mockPoints = adaptPointToClient(jsonPoints);

export { mockPoints };
