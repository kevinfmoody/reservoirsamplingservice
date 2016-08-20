# Reservoir Sampling Service

## Installing
First, you'll need to have installed Node.js. Then, clone the repository and install module dependencies.
```bash
git clone https://github.com/kevinfmoody/reservoirsamplingservice.git
cd reservoirsamplingservice
npm install
```

## Running the Service
```bash
npm start
```
By default, the service will start on port 3000. You can also specify a custom port.
```bash
PORT=8080 npm start
```

## API
To query the API, use the following HTTP methods on the provided urls. Send request payloads as type `application/json`. Replace URL parameters such as `:id` with the desired values.


### :small_blue_diamond: POST /reservoirs
Creates a new reservoir with the specified elements. Returns the reservoir object which includes the reservoir elements and the generated reservoir ID.
#### Sample Request
Method & URL
```bash
POST /reservoirs
```
JSON
```json
{
  "elements": [1, 2, 3, 4, 5]
}
```
#### Sample Response
JSON
```json
{
  "reservoir": {
    "id": 0,
    "elements": [1, 2, 3, 4, 5]
  }
}
```


### :small_blue_diamond: GET /reservoirs/:id
Gets the reservoir with the sepecified id. Returns the reservoir object which includes the reservoir elements and the generated reservoir ID.
#### Sample Request
Method & URL
```bash
GET /reservoirs/0
```
#### Sample Response
JSON
```json
{
  "reservoir": {
    "id": 0,
    "elements": [1, 2, 3, 4, 5]
  }
}
```


### :small_blue_diamond: PATCH /reservoirs/:id
Updates a reservoir by probabilistically replacing one of the existing elements in the reservoir with the provided element. Returns the updated reservoir object which includes the reservoir elements and the reservoir ID.
#### Sample Request
Method & URL
```bash
PATCH /reservoirs/0
```
JSON
```json
{
  "element": 6
}
```
#### Sample Response
JSON
```json
{
  "reservoir": {
    "id": 0,
    "elements": [1, 6, 3, 4, 5]
  }
}
```


### :small_blue_diamond: DELETE /reservoirs/:id
Deletes the reservoir with the sepecified id. Returns the reservoir object at time of deletion which includes the reservoir elements and the reservoir ID.
#### Sample Request
Method & URL
```bash
DELETE /reservoirs/0
```
#### Sample Response
JSON
```json
{
  "reservoir": {
    "id": 0,
    "elements": [1, 6, 3, 4, 5]
  }
}
```
